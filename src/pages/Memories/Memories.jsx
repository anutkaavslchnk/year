import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import styles from "./Memories.module.css";
import gif from '/public/Happy Dance GIF by Créu Cat.gif';
import music from '/public/ml.m4a';
const messages = [
  "Сьогодні особливий день...",
  "Я памʼятаю 19 квітня 2024 року, ніби це було вчора",
  "Кіно",
  "Дощ",
  "Гаряча кава",
  "Боулінг",
"Болоньєзе",
"Вечірні танці на кухні",
"Stripped",
"Mein Land",
"🥹🥹🥹🥹",
  "Ми разом вже цілий рік 💕",
  "Я тебе дуже сильно кохаю ❤️",
  "Я хочу, щоб ти знав що ти для мене дуже важливий",
  " І зараз хочеться сказати цю фразу, яку завжди кажуть в кінці фільмів",
  "Далі буде...",
  "З нашим днем, коханий ❤️",
];

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const audioRef = useRef(null);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (currentIndex < messages.length) {
      if (charIndex < messages[currentIndex].length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + messages[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 70);
        return () => clearTimeout(typingTimeout);
      } else {
        setTypingDone(true);

        
        const waitBeforeNext = setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setTypingDone(false);
          setCurrentIndex((prev) => prev + 1);
        }, 1500);

        return () => clearTimeout(waitBeforeNext);
      }
    } else if (!musicPlayed) {
     
      audioRef.current?.play().catch((e) => console.log("Audio play failed:", e));
      setMusicPlayed(true);

      
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
      setTimeout(() => setShowGif(true), 1000);
    }
  }, [charIndex, currentIndex]);

  return (
    <div className={styles.container}>
      {currentIndex < messages.length && (
        <div className={`${styles.text} ${styles.show}`}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </div>
      )}


      <audio ref={audioRef} src={music} loop />
      {showGif && (
        <img
          src={gif}
          alt="hug"
          className={styles.gif}
        />
      )}
      <canvas id="confetti-canvas" />
    </div>
  );
};

export default Memories;