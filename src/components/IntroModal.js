import React from "react";
import { useState } from "react";

const IntroModal = ({ onCloseModal }) => {
    const [isActive, setIsActive] = useState(true);

    const closeModal = () => {
        onCloseModal();
        setIsActive(false);
    };
    return (
        <div className={"modal " + (isActive ? "is-active" : "")}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <div
                className='modal-background'
                onClick={() => closeModal()}
                role='dialog'
            />
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <button
                        className='delete'
                        aria-label='close'
                        onClick={() => closeModal()}></button>
                </header>
                <section
                    className='modal-card-body'
                    style={{ textAlign: "center" }}>
                    <p
                        className='intro-modal__body-text'
                        style={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{
                                color: "#0bccde",
                                fontSize: "22px",
                                fontWeight: "700",
                            }}>
                            ❤ Selamat Bertambah Usia ❤
                        </span>
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                            }}>
                            ❤ Diah Utari Purwaningrum ❤
                        </span>
                        <div style={{ display: "flex", columnGap: "20px" }}>
                            <p>From: Beloved Adnya</p>
                            {/* <img style={{ width: "30px" }} src={pig} /> */}
                        </div>
                    </p>
                </section>
                <footer className='modal-card-foot'>
                    <button
                        className='button intro-modal__cta-btn'
                        onClick={() => closeModal()}>
                        Let's Celebrate!
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default IntroModal;
