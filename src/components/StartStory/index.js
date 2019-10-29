// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
import { MdHome, MdBookmark, MdPerson } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './startstory.scss';

// == Composant
class StartStory extends React.Component {
  componentDidMount() {
    const { getStartStories } = this.props;
    getStartStories();
  }

  render() {
    const { id, text, color, image, choice } = this.props;
    // style= {{ background: color }};
    return (
      <div className="container-story">
        <Image src={image} alt="" className="bg-image" />
        <div className="story">
          <div className="story-account">
            <Image
              src="https://st2.depositphotos.com/1007566/11569/v/950/depositphotos_115690782-stock-illustration-young-and-elegant-woman-avatar.jpg"
              className="story-account-img"
              roundedCircle
            />
            <div className="story-account-info">
              <p className="story-account-name">Nom / Pseudo</p>
              <div className="story-account-nav">
                <NavLink to="/profile" className="d-flex justify-content-center align-items-center" variant="light mt-1"><FaUser className="mr-2" /> Mon profil</NavLink>
                <NavLink to="" className="d-flex justify-content-center align-items-center" variant="light mt-1"><MdBookmark className="mr-1" /> Sauvegarder</NavLink>
                <NavLink to="/" className="d-flex justify-content-center align-items-center" variant="light mt-1"><MdHome className="mr-1" /> Retour à l'accueil</NavLink>
              </div>
            </div>
          </div>
          <div className="story-page">
            <div className="story-text">
              {text}
            </div>
            <div className="story-choice">
              {choice.map((item) => (
                <button type="submit" className="story-choice-link" variant="secondary" key={item.text}>{item.text}</button>
              ))}
            </div>
            <div className="story-account-nav-mobile mt-4">
              <NavLink to="/profile" className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdPerson className="mr-1" />Mon profil</NavLink>
              <NavLink to="" className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdBookmark className="mr-1" /> Sauvegarder</NavLink>
              <NavLink to="/" className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdHome className="mr-1" /> Retour à l'accueil</NavLink>
            </div>
            <div className="story-account-nav-footer">
              <NavLink to="" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdPerson /></NavLink>
              <NavLink to="" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdBookmark /></NavLink>
              <NavLink to="" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdHome /></NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StartStory.propTypes = {
  id: PropTypes.number.isRequired,
  getStartStories: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  choice: PropTypes.array.isRequired,
};

// == Export
export default StartStory;