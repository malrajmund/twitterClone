import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import "./Landing.scss";

export const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={isModalOpen ? "modal--open" : "modal--close"}>
        <Grid container className='modal__container'>
          <Grid item xl={1}>
            <div
              className='modal__closeButton'
              onClick={(e) => setIsModalOpen(!isModalOpen)}
            >
              <hr className='modal__closeButtonFirstLine'></hr>
              <hr className='modal__closeButtonSecondLine'></hr>
            </div>
          </Grid>
          <Grid item xl={12} className='modal__twitterIcon'>
            <TwitterIcon style={{ fontSize: "35px" }} />
          </Grid>
          <Grid item xl={12}>
            <h2>Utwórz konto</h2>
          </Grid>
          <Grid item xl={12}>
            <input
              className='modal__Input'
              type='text'
              placeholder='Imię'
            ></input>
          </Grid>
          <Grid item xl={12}>
            <input
              className='modal__Input'
              type='text'
              placeholder='Telefon'
            ></input>
          </Grid>
          <Grid item xl={12}>
            <a href='/'>Użyj adresu e-mail</a>
          </Grid>
          <Grid item xl={12}>
            <p>Data urodzenia</p>{" "}
            <p>
              Ta informacja nie będzie widoczna dla innych użytkownikow. Podaj
              swój wiek, nawet jęsli jest to konto reprezentująće firmę,
              zwierzaka lub jakąkolwioek inną osobę czy rzecz.
            </p>
          </Grid>
          <Grid item xl={12}>
            <input></input>
          </Grid>
          <Grid item xl={12} className='modal__button'>
            <button>Zarejestruj się</button>
          </Grid>
        </Grid>
      </div>
      <Grid container className='mainSection'>
        <Grid item xl={7} className='imgContainer'>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            className='imgContainer'
          >
            <Grid item xl={4}>
              <TwitterIcon className='imgContainer__twitterIcon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={5} className='welcomeContainer'>
          <Grid container direction='row'>
            <Grid item xl={12}>
              <TwitterIcon style={{ fontSize: "50px" }} />
            </Grid>
            <Grid item xl={12}>
              <h1>Najświeższe wieści ze świata</h1>
            </Grid>
            <Grid item xl={12}>
              <h2>Dołącz do Twittera.</h2>
            </Grid>
            <Grid item xl={12}>
              <button>
                {" "}
                <GoogleIcon
                  style={{ verticalAlign: "bottom", fontSize: "20px" }}
                />{" "}
                Zarejestruj się przez Google
              </button>
            </Grid>
            <Grid item xl={12}>
              <button>
                {" "}
                <AppleIcon
                  style={{ verticalAlign: "bottom", fontSize: "20px" }}
                />{" "}
                Zarejestruj się przez Apple
              </button>
            </Grid>
            <Grid item xl={12}>
              <button onClick={(e) => setIsModalOpen(!isModalOpen)}>
                {" "}
                Zarejestruj się przez E-mail
              </button>
            </Grid>
            <Grid item xl={6}>
              <p>
                Rejestrując się, zgadzasz się na{" "}
                <a href='/'>Warunki korzystania</a> i{" "}
                <a href='/'>Politykę prywatności</a>, łącznie z{" "}
                <a href='/'>Polityką ciasteczek</a>.
              </p>
            </Grid>
            <Grid item xl={12}>
              Masz już konto? <a href='/'>Zaloguj się</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className='footerSection'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xl={11}>
          <a href='/'>Informacje</a>
          <a href='/'>Centrum pomocy</a>
          <a href='/'>Zasady użytkowania</a>
          <a href='/'>Polityka prywatności</a>
          <a href='/'>Polityka dotycząca plików cookie</a>
          <a href='/'>Informacja o reklamach</a>
          <a href='/'>Blog</a>
          <a href='/'>Status</a>
          <a href='/'>Praca</a>
          <a href='/'>Zasoby marki</a>
          <a href='/'>Reklamy</a>
          <a href='/'>Marketing</a>
          <a href='/'>Twitter dla firm</a>
          <a href='/'>Developerzy</a>
          <a href='/'>Ścieżka</a>
          <a href='/'>Ustawienia</a>
          <a href='/'>© 2021 Twitter, Inc.</a>
        </Grid>
      </Grid>
    </>
  );
};
