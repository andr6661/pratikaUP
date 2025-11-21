import React from 'react';
import logoSvg from "../icon/logo.svg";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Button from "../components/Button/Button.jsx";

const Contact = () => {
    return (
        <div>
            <Header image={logoSvg}/>
            <section className="contacts-section">
                <div className="container">
                    <h2 className="section-title">Свяжитесь с нами</h2>

                    <div className="contacts-grid">

                        <div className="contact-form-wrapper">
                            <h3>Оставьте заявку</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Имя *</label>
                                    <input type="text" id="name" name="name" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Телефон *</label>
                                    <input type="tel" id="phone" name="phone" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Сообщение</label>
                                    <input id="message" name="message"
                                              placeholder="Ваш вопрос или сообщение..."></input>
                                </div>

                                <Button>Отправить сообщение</Button>
                            </form>
                        </div>


                        <div className="contacts-info">

                            <div className="contact-details">
                                <h3>Контактная информация</h3>

                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <strong>Адрес:</strong>
                                        <span>г. Москва, ул. Примерная, д. 123</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-text">
                                        <strong>Телефоны:</strong>
                                        <div className="phones">
                                            <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                                            <a href="tel:+79998765432">+7 (999) 876-54-32</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div className="contact-text">
                                        <strong>Email:</strong>
                                        <a href="mailto:info@lilcity.ru">info@lilcity.ru</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">🕒</div>
                                    <div className="contact-text">
                                        <strong>Время работы:</strong>
                                        <span>Пн-Пт: 9:00-18:00</span>
                                        <span>Сб-Вс: 10:00-16:00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="social-links">
                                <h4>Мы в соцсетях:</h4>
                                <div className="social-icons">
                                    <a href="#" className="social-link vk"><svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.279 13.0333C0.654 6.75129 5.166 1.6765 10.965 1.00655C16.98 0.352777 23.373 0 30 0C36.627 0 43.02 0.352777 49.035 1.00978C54.834 1.6765 59.346 6.75129 59.721 13.0333C59.904 16.1274 60 19.2894 60 22.5C60 25.7106 59.904 28.8726 59.721 31.9667C59.346 38.2487 54.834 43.3235 49.035 43.9935C43.02 44.6472 36.627 45 30 45C23.373 45 16.98 44.6472 10.965 43.9902C5.166 43.3235 0.654 38.2487 0.279 31.9667C0.0959998 28.8726 0 25.7106 0 22.5C0 19.2894 0.0959998 16.1274 0.279 13.0333Z"
                                              fill="#FF0000"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M39.1649 22.4999L24.4379 32.1931V12.8066L39.1649 22.4999Z" fill="white"/>
                                    </svg></a>
                                    <a href="#" className="social-link telegram"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.125 0H7.875C3.52576 0 0 3.52576 0 7.875V37.125C0 41.4742 3.52576 45 7.875 45H37.125C41.4742 45 45 41.4742 45 37.125V7.875C45 3.52576 41.4742 0 37.125 0Z" fill="#4489C8"/>
                                        <path d="M6.76386 13.9006H12.1639C12.2767 13.9004 12.387 13.9346 12.48 13.9987C12.5729 14.0628 12.6442 14.1536 12.6842 14.2592C13.2818 15.799 15.7639 21.8248 18.0349 22.317C19.7224 22.317 19.1248 14.3014 16.9803 14.3014C16.4178 14.3014 17.9787 13.303 18.0842 13.2608C20.0771 12.7145 22.1803 12.7145 24.1732 13.2608C25.249 13.7108 25.4318 14.9694 25.4599 16.0381C25.4881 17.1069 24.2646 21.6631 25.8748 22.1553C27.9842 22.8022 30.6982 16.1858 31.331 14.5615C31.3722 14.4573 31.4439 14.3679 31.5368 14.3052C31.6296 14.2424 31.7393 14.2093 31.8514 14.21H37.8631C37.956 14.2097 38.0475 14.2324 38.1295 14.2761C38.2115 14.3198 38.2813 14.3832 38.3329 14.4605C38.3844 14.5378 38.416 14.6266 38.4248 14.7191C38.4336 14.8116 38.4194 14.9048 38.3834 14.9905C37.1451 17.8154 35.6604 20.5259 33.9467 23.0905C33.801 23.3021 33.7326 23.5574 33.7531 23.8136C33.7736 24.0697 33.8817 24.3109 34.0592 24.4967C35.8592 26.4233 40.781 31.8795 37.9685 31.8795H31.9006C31.7437 31.8799 31.5886 31.8469 31.4456 31.7826C31.3025 31.7183 31.1748 31.6243 31.0709 31.5069C30.1287 30.4662 27.3865 27.5694 26.149 27.8014C25.1224 27.9912 25.024 29.735 25.0732 30.874C25.0887 31.1679 24.9885 31.4562 24.7939 31.677C24.5994 31.8978 24.3261 32.0336 24.0326 32.0553C22.9568 32.1186 21.4873 32.1467 21.3537 32.1397C17.0646 31.8655 14.5264 29.0037 12.1006 25.8115C9.55958 22.4272 7.57742 18.6576 6.22948 14.6459C6.20193 14.561 6.19471 14.4709 6.20841 14.3827C6.22211 14.2945 6.25633 14.2108 6.30834 14.1382C6.36034 14.0657 6.42865 14.0064 6.50778 13.9651C6.5869 13.9239 6.67462 13.9018 6.76386 13.9006Z" fill="white"/>
                                    </svg></a>
                                    <a href="#" className="social-link youtube"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
                                            fill="url(#paint0_linear_133_360)"/>
                                        <path
                                            d="M8.3794 23.6007C11.0096 22.1519 13.9457 20.9427 16.689 19.7273C21.4086 17.7367 26.1469 15.7805 30.933 13.9593C31.8642 13.649 33.5374 13.3455 33.7014 14.7255C33.6116 16.6789 33.2421 18.6208 32.9886 20.5627C32.3452 24.8332 31.6015 29.0891 30.8764 33.3456C30.6265 34.7633 28.8504 35.4973 27.714 34.59C24.9829 32.7452 22.2308 30.9184 19.5345 29.0308C18.6513 28.1333 19.4703 26.8446 20.2591 26.2037C22.5085 23.9869 24.8941 22.1034 27.026 19.7721C27.601 18.3833 25.9019 19.5537 25.3415 19.9123C22.262 22.0344 19.2579 24.2861 16.0111 26.1512C14.3527 27.0641 12.4197 26.2839 10.762 25.7745C9.27571 25.1591 7.09784 24.5391 8.3794 23.6007Z"
                                            fill="white"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_133_360" x1="16.8776" y1="1.8765" x2="5.62762"
                                                            y2="28.125" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#37AEE2"/>
                                                <stop offset="1" stop-color="#1E96C8"/>
                                            </linearGradient>
                                        </defs>
                                    </svg></a>
                                </div>
                            </div>


                            <div className="map-container">
                                <h4>Мы на карте:</h4>
                                <div className="map-placeholder">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.0017304174323!2d43.98709502598618!3d56.30839173480007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4151d5b01e0cc807%3A0x10d94e21a7c51c54!2z0KLQoNCaINCd0LXQsdC-!5e0!3m2!1sru!2sru!4v1763701664010!5m2!1sru!2sru"
                                        width="525" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Contact;