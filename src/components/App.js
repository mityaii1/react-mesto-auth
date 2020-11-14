import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header'
import Register from './Register.js';
import Login from './Login.js';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import * as apiAuth from '../utils/apiAuth';
import { getToken, removeToken } from '../utils/token';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';
import '../App.css';


function App() {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isInfoTooltip, setInfoTooltip] = React.useState(false);
    const [toolTipPopup, setToolTipPopup] = React.useState({});
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '' });
    const [cards, setCards] = React.useState([])

    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen); }
    const handleEditProfileClick = () => { setIsEditProfilePopupOpen(!isEditProfilePopupOpen); }
    const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(!isAddPlacePopupOpen); }
    const handleCardClick = (card) => { setSelectedCard(card); }
    const handleCardDeleteClick = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter((c) => c._id !== card._id));
            })
            .catch((err) => { console.log(err); });
    }
    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked)
            api.addLike(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards);
                })
                .catch((err) => { console.log(err); });
        if (isLiked)
            api.deleteLike(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards);
                })
                .catch((err) => { console.log(err); });
    }
    const handleUpdateUser = (user) => {
        api.setUserInfo(user.name, user.about)
            .then((user) => {
                setCurrentUser({
                    ...currentUser,
                    name: user.name,
                    about: user.about,
                })
                closeAllPopups()
            })
            .catch((err) => { console.log(err); })
    }
    const handleUpdateAvatar = (user) => {
        api.updateAvatar(user.avatar)
            .then((user) => {
                setCurrentUser({
                    ...currentUser,
                    avatar: user.avatar,
                })
                closeAllPopups()
            })
            .catch((err) => { console.log(err); })
    }
    const handleAddPlaceSubmit = (item) => {
        api.addNewCard(item.name, item.link)
            .then((newCard) => {
                setCards(
                    [newCard, ...cards]
                );
                closeAllPopups();
            })
            .catch((err) => { console.log(err); })
    }
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard(false)
        setIsCardDeletePopupOpen(false)
        setInfoTooltip(false)
    }
    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, res]) => {
                setCurrentUser(user);
                setCards(res)

            })
            .catch((err) => { console.log(err); })
    }, [])

    function onInfoTooltip(image, text) {
        setToolTipPopup({
            image: image,
            text: text
        })
        setInfoTooltip(true)
    }
    const handleLogin = (email) => {
        setLoggedIn(true);
        setEmail(email);
    };

    const tokenCheck = () => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        apiAuth.checkToken(jwt)
            .then((res) => {
                if (res) {
                    setEmail(res.data.email)
                    setLoggedIn(true);
                    history.push('/')
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    console.log('Переданный токен некорректен');
                } else if (err.status === 400) {
                    console.log('Токен не передан или передан не в том формате');
                }
            });
    }

    React.useEffect(() => {
        tokenCheck();
    }, []);

    const onSignOut = () => {
        removeToken()
        history.push('/sign-in');
        setEmail('');
        setLoggedIn(false);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                {loggedIn ? <Header email={email} routePathName={'Выйти'} loggedIn={loggedIn} loggedOut={onSignOut} /> : ''}
                <Switch>
                    <Route path="/sign-up">
                        <Header routePathName={'Войти'} routePath={'/sign-in'} loggedIn={loggedIn} />
                        <Register onInfoTooltip={onInfoTooltip} />
                    </Route>
                    <Route path="/sign-in">
                        <Header routePathName={'Регистрация'} routePath={'/sign-up'} loggedIn={loggedIn} />
                        <Login onLogin={handleLogin} onInfoTooltip={onInfoTooltip} />
                    </Route>
                    <ProtectedRoute path="/" loggedIn={loggedIn} component={Main}
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        cards={cards}
                        onCardClick={handleCardClick}
                        onCardDelete={handleCardDeleteClick}
                        onCardLike={handleCardLike} />
                </Switch>

                <Route>
                    {loggedIn === true ? <Redirect to='/' /> : <Redirect to='/sign-in' />}
                </Route>
                <Footer />
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
                <PopupWithForm name="remove-card" title="Вы уверены?" buttonText="Да" isOpen={isCardDeletePopupOpen} onClose={closeAllPopups}
                />
                <ImagePopup name="images" card={selectedCard} onClose={closeAllPopups} />
                <InfoTooltip isOpen={isInfoTooltip} toolTipPopup={toolTipPopup} onClose={closeAllPopups}></InfoTooltip>
            </div>
        </CurrentUserContext.Provider>
    );

}

export default App;
