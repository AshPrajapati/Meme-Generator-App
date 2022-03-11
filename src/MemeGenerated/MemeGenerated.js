import React,{useState} from 'react';
import {useNavigate,useLocation} from "react-router-dom";
import { useClipboard } from 'use-clipboard-copy';
import styles from "./styles.module.css";

function MemeGenerated() {
    const navigate = useNavigate();
    const location  = useLocation();
    const clipboard = useClipboard();
    const [copied, setCopied] = useState(false);
    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
      };


  return (
     <>
        <div className={styles.container}>
      <button onClick={() => navigate('/')} className={styles.home}>
        Make More Memes
      </button>
      { url && <img alt='meme' src={url} /> }
      <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
    </div>
     </>
  )
}

export default MemeGenerated;
