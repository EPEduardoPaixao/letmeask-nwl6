import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import ligthOn from '../assets/images/light_on.svg'

import { Container } from "../styles/auth";
import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";
import Switch from "react-switch";
// import {ThemeContext} from 'styled-components';
import React,{useContext} from "react";
import {AuthContext} from '../contexts/AuthContext'
import { useTheme } from "../hooks/useTheme";


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  // const {colors} = useContext(ThemeContext)
  const {theme, toggleTheme} = useTheme()


  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/new/room");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Sala não existe!");
      return;
    }
    if (roomRef.val().endedAt) {
      alert("Esta sala já foi encerrada!");
      return;
    }
    history.push(`/room/${roomCode}`);
  }

  return (
    <Container>
      <div id="page-auth" className={theme}>
        <aside>
          <img
            src={illustrationImg}
            alt="Ilustração simbolizando perguntas e respostas"
          />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
          <div className="main-content">
            
            <img src={logoImg} alt="Letmeask" />
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                placeholder="Digite o código da sala"
                onChange={(event) => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">Entrar na sala</Button>
            </form>
          </div>
        </main>

        <div style={{ paddingTop: 16 }}>
          {/* <Switch
            // onChange={() => {toggleTheme()}}
            checked={true}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            // offColor={colors.secundary}
            onColor={colors.primary}
          /> */}

          {/* Deixar o background do button transparente */}
          <button onClick={toggleTheme}>
          <img src={ligthOn} alt="" />
          </button>
        </div>
      </div>
    </Container>
  );
}
