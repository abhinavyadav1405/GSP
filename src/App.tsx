import React from "react";
import UserProfile from "./components/UserProfile";
import ProfileLookup from "./components/ProfileLookup";
import GSPReels from "./components/GSPReels";
import { useState, useEffect, useRef } from "react";
import { Camera, Image as ImageIcon, Video, Trash2, User, Bell, Trophy, LockKeyhole, Search, Phone, Download, Settings, Pencil, AlertTriangle, CheckCircle2, CalendarDays, MapPin, Map, FileText, Clipboard, Pin, Mic, Star, Clock3, RefreshCw, XCircle, Megaphone, Siren, Building2, PartyPopper, Droplets, Zap, Hospital, Waves, HardHat, Check, Home, LayoutDashboard, Plus, LogIn, ChevronUp, ChevronDown, ShieldAlert, Upload, CircleUserRound, Heart, MessageCircle, Send, Landmark } from "lucide-react";
import { Leaf } from "lucide-react";

import {
  db, auth, functions, signInWithCustomToken, signOut, httpsCallable, onAuthStateChanged,
  collection, doc, updateDoc, deleteDoc, onSnapshot, setDoc, getDoc, query, orderBy, arrayUnion, arrayRemove, addDoc,
  storage, ref, uploadBytes, getDownloadURL,
} from "./firebase";


const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes blob1 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(60px,-40px) scale(1.12); } 66% { transform: translate(-40px,30px) scale(0.94); } }
  @keyframes blob2 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(-50px,55px) scale(1.08); } 66% { transform: translate(65px,-20px) scale(0.95); } }
  @keyframes blob3 { 0%,100% { transform: translate(0px,0px) scale(1); } 33% { transform: translate(40px,50px) scale(1.06); } 66% { transform: translate(-55px,-35px) scale(1.04); } }
  .aurora-bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
  .ab { position: absolute; border-radius: 50%; filter: blur(75px); opacity: 0.40; mix-blend-mode: multiply; }
  .ab1 { width: 55vw; height: 55vw; max-width: 680px; background: radial-gradient(circle, rgba(255,50,50,0.7) 0%, transparent 100%); top: -15%; left: -10%; animation: blob1 8s ease-in-out infinite; }
  .ab2 { width: 50vw; height: 50vw; max-width: 580px; background: radial-gradient(circle, rgba(255,220,0,0.7) 0%, transparent 100%); top: 30%; right: -12%; animation: blob2 10s ease-in-out infinite; }
  .ab3 { width: 42vw; height: 42vw; max-width: 520px; background: radial-gradient(circle, rgba(50,205,50,0.65) 0%, transparent 100%); bottom: -10%; left: 30%; animation: blob3 12s ease-in-out infinite; }
  .ab4 { width: 32vw; height: 32vw; max-width: 400px; background: radial-gradient(circle, rgba(100,149,255,0.65) 0%, transparent 100%); top: 10%; right: 25%; animation: blob1 9s ease-in-out infinite reverse; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f0eeff; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; background: #f0eeff; color: #1a1040; }
  :root {
    --bg-page:#0a0814;--bg2:#0f0c1e;--text-main:#f0eeff;
    --ct65:rgba(240,238,255,0.65);--ct6:rgba(240,238,255,0.60);--ct5:rgba(240,238,255,0.50);
    --ct45:rgba(240,238,255,0.45);--ct4:rgba(240,238,255,0.40);--ct35:rgba(240,238,255,0.35);--ct3:rgba(240,238,255,0.28);
    --cbg12:rgba(124,92,252,0.12);--cbg8:rgba(124,92,252,0.08);--cbg7:rgba(255,255,255,0.07);
    --cbg6:rgba(255,255,255,0.06);--cbg5:rgba(255,255,255,0.05);--cbg4:rgba(255,255,255,0.04);
    --cb25:rgba(124,92,252,0.40);--cb20:rgba(124,92,252,0.25);--cb15:rgba(124,92,252,0.18);--cb10:rgba(124,92,252,0.12);
    --glass-bg:rgba(255,255,255,0.045);--glass-border:rgba(255,255,255,0.10);
    --navbar-bg:rgba(10,8,20,0.78);--input-bg:rgba(255,255,255,0.055);
    --input-border:rgba(255,255,255,0.11);--input-color:#f0eeff;
    --input-placeholder:rgba(240,238,255,0.30);--select-option-bg:#13102a;
    --btn-ghost-bg:rgba(255,255,255,0.07);--btn-ghost-color:#f0eeff;
    --btn-ghost-border:rgba(255,255,255,0.13);--scrollbar:rgba(124,92,252,0.35);--grid-line:rgba(124,92,252,0.04);
  }
  [data-theme="light"] {
    --bg-page:#f0eeff;--bg2:#e4ddff;--text-main:#1a1040;
    --ct65:#2a2060;--ct6:#3a2f70;--ct5:#4a3f80;--ct45:#5a4f90;--ct4:#6a5fa0;--ct35:#7a6fb0;--ct3:#8a7fc0;
    --cbg12:rgba(124,92,252,0.12);--cbg8:rgba(124,92,252,0.08);--cbg7:rgba(124,92,252,0.07);
    --cbg6:rgba(124,92,252,0.06);--cbg5:rgba(124,92,252,0.05);--cbg4:rgba(124,92,252,0.04);
    --cb25:rgba(124,92,252,0.35);--cb20:rgba(124,92,252,0.22);--cb15:rgba(124,92,252,0.16);--cb10:rgba(124,92,252,0.10);
    --glass-bg:rgba(255,255,255,0.72);--glass-border:rgba(124,92,252,0.18);
    --navbar-bg:rgba(240,238,255,0.88);--input-bg:rgba(255,255,255,0.80);
    --input-border:rgba(124,92,252,0.22);--input-color:#1a1040;
    --input-placeholder:rgba(26,16,64,0.38);--select-option-bg:#fff;
    --btn-ghost-bg:rgba(124,92,252,0.08);--btn-ghost-color:#1a1040;
    --btn-ghost-border:rgba(124,92,252,0.22);--scrollbar:rgba(124,92,252,0.30);--grid-line:rgba(124,92,252,0.06);
  }
  .glass{background:var(--glass-bg);backdrop-filter:blur(20px) saturate(160%);-webkit-backdrop-filter:blur(20px) saturate(160%);border:1px solid var(--glass-border);position:relative;overflow:hidden;}
  .glass::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:linear-gradient(145deg,rgba(124,92,252,0.20) 0%,rgba(255,255,255,0.04) 40%,rgba(56,217,245,0.08) 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}
  [data-theme="light"] .glass::before{background:linear-gradient(145deg,rgba(124,92,252,0.12) 0%,rgba(255,255,255,0.5) 50%,rgba(56,217,245,0.08) 100%);}
  .glass-dark{background:var(--navbar-bg);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);border:1px solid var(--glass-border);position:relative;overflow:hidden;}
  .btn-white{background:linear-gradient(135deg,#7c5cfc 0%,#5b3fd4 100%);color:#fff;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;transition:all 0.2s;box-shadow:0 4px 16px rgba(124,92,252,0.35);}
  .btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(124,92,252,0.5);}
  .btn-white:disabled{opacity:0.5;cursor:not-allowed;transform:none;box-shadow:none;}
  .btn-ghost{background:var(--btn-ghost-bg);color:var(--btn-ghost-color);border:1px solid var(--btn-ghost-border);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;transition:all 0.2s;}
  .btn-ghost:hover{background:rgba(124,92,252,0.12);border-color:rgba(124,92,252,0.28);}
  .btn-danger{background:rgba(248,113,113,0.10);color:#f87171;border:1px solid rgba(248,113,113,0.25);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;transition:all 0.2s;}
  [data-theme="light"] .btn-danger{color:#c00;} .btn-danger:hover{background:rgba(248,113,113,0.20);}
  input,textarea,select{background:var(--input-bg);border:1px solid var(--input-border);color:var(--input-color);font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;border-radius:12px;padding:10px 14px;width:100%;outline:none;transition:border-color 0.2s,box-shadow 0.2s;}
  input:focus,textarea:focus,select:focus{border-color:rgba(124,92,252,0.50);box-shadow:0 0 0 3px rgba(124,92,252,0.12);}
  input::placeholder,textarea::placeholder{color:var(--input-placeholder);}
  select option{background:var(--select-option-bg);color:var(--input-color);}
  ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:transparent;} ::-webkit-scrollbar-thumb{background:var(--scrollbar);border-radius:4px;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
  @keyframes pulse-dot{0%,100%{opacity:1;}50%{opacity:0.3;}}
  @keyframes floatOrb{0%,100%{transform:translateY(0);}50%{transform:translateY(-22px);}}
  @keyframes floatChip{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
  @keyframes pulseGlow{0%,100%{opacity:0.5;transform:scale(1);}50%{opacity:1;transform:scale(1.07);}}
  /* Village Gallery — editorial cards, restrained motion, and immersive photo viewer */
  .village-gallery{width:100%;position:relative;padding:4px 0 10px;color:var(--text-main);}
  .gallery-heading{text-align:center;margin:8px auto 34px;max-width:720px;}
  .gallery-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 14px;border-radius:999px;border:1px solid rgba(124,92,252,.25);background:linear-gradient(135deg,rgba(124,92,252,.12),rgba(56,217,245,.07));font-size:10px;font-weight:800;letter-spacing:2px;color:#8b70f5;}
  .gallery-eyebrow-dot{width:7px;height:7px;border-radius:50%;background:#38d9a9;box-shadow:0 0 0 4px rgba(56,217,169,.12);}
  .gallery-heading h2{font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,5vw,48px);line-height:1.12;letter-spacing:-1.8px;margin:17px 0 10px;color:var(--text-main);}
  .gallery-heading h2 span{background:linear-gradient(100deg,#a78bfa 5%,#60a5fa 52%,#34d399 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .gallery-heading p{font-size:14px;line-height:1.7;color:var(--ct5);max-width:500px;margin:0 auto;}
  .gallery-heading-rule{height:1px;width:min(190px,45%);margin:23px auto 0;background:linear-gradient(90deg,transparent,rgba(139,112,245,.6),transparent);position:relative;}
  .gallery-heading-rule span{position:absolute;left:50%;top:50%;width:5px;height:5px;border-radius:50%;background:#9b87ff;transform:translate(-50%,-50%);box-shadow:0 0 12px rgba(139,112,245,.8);}
  .gallery-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;align-items:start;}
  .gallery-card{min-width:0;overflow:hidden;border-radius:20px;border:1px solid var(--glass-border);background:var(--glass-bg);box-shadow:0 8px 24px rgba(22,12,55,.045);animation:galleryCardEnter .55s cubic-bezier(.2,.7,.2,1) both;transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;}
  .gallery-card:hover{transform:translateY(-5px);border-color:rgba(139,112,245,.42);box-shadow:0 18px 38px rgba(83,57,153,.16);}
  .gallery-card-media{position:relative;aspect-ratio:4/3;overflow:hidden;background:linear-gradient(135deg,rgba(124,92,252,.15),rgba(56,217,245,.08));cursor:zoom-in;isolation:isolate;}
  .gallery-card-media iframe{position:absolute;inset:0;width:100%;height:100%;border:0;z-index:2;}
  .gallery-card-image{display:block;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1),filter .5s ease;will-change:transform;}
  .gallery-card:hover .gallery-card-image{transform:scale(1.065);filter:saturate(1.12);}
  .gallery-card:hover{box-shadow:0 18px 42px rgba(124,92,252,.24),0 0 0 1px rgba(139,112,245,.24);}
  .gallery-card-media:active .gallery-card-image{transform:scale(1.035);}
  .gallery-lightbox-content img{cursor:zoom-in;transition:transform .28s cubic-bezier(.2,.7,.2,1);touch-action:pan-y;}
  .gallery-lightbox-content img.is-zoomed{transform:scale(1.65);cursor:zoom-out;}
  .gallery-lightbox-content.is-zoomed{overflow:auto;max-width:100%;max-height:calc(100vh - 150px);}
  .gallery-lightbox-content.is-zoomed img{max-height:none;max-width:none;width:auto;height:auto;min-width:min(100%,500px);max-height:none;}
  @media(max-width:760px){.gallery-lightbox-content img.is-zoomed{transform:scale(1.5);}.gallery-card:hover{transform:none;}}
  .gallery-card-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(8,6,20,.34),transparent 32%,transparent 58%,rgba(8,6,20,.2));opacity:.7;transition:opacity .3s ease;}
  .gallery-card:hover .gallery-card-shade{opacity:1;}
  .gallery-card-topline{position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:center;z-index:3;pointer-events:none;}
  .gallery-type-pill{display:inline-flex;align-items:center;padding:6px 9px;border-radius:999px;color:white;background:rgba(22,16,48,.62);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(12px);font-size:9px;font-weight:800;letter-spacing:1px;}
  .gallery-type-pill.is-video{background:rgba(190,35,75,.72);}
  .gallery-delete{pointer-events:auto;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:rgba(20,10,35,.7)!important;color:#fff!important;border:1px solid rgba(255,255,255,.25)!important;backdrop-filter:blur(10px);cursor:pointer;}
  .gallery-open-hint{position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:999px;background:rgba(18,12,40,.65);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(12px);color:#fff;font-size:10px;font-weight:700;opacity:0;transform:translateY(5px);transition:opacity .25s ease,transform .25s ease;pointer-events:none;}
  .gallery-open-hint span{font-size:15px;}
  .gallery-card:hover .gallery-open-hint{opacity:1;transform:translateY(0);}
  .gallery-card-info{display:flex;align-items:flex-start;gap:12px;padding:14px 15px 16px;}
  .gallery-card-index{font-family:'Space Grotesk',sans-serif;font-size:11px;font-weight:700;color:#9b87ff;padding-top:2px;}
  .gallery-card-copy{min-width:0;flex:1;}
  .gallery-card-copy h3{font-size:13px;font-weight:700;line-height:1.45;color:var(--text-main);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .gallery-card-copy p{font-size:11px;line-height:1.5;color:var(--ct5);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .gallery-invalid-video{position:absolute;inset:0;display:grid;place-items:center;color:var(--ct5);font-size:12px;}
  .gallery-compact-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:17px;}
  .gallery-compact-kicker{display:block;color:#8b70f5;font-size:9px;font-weight:800;letter-spacing:1.7px;margin-bottom:5px;}
  .gallery-compact-heading h3{font-family:'Space Grotesk',sans-serif;font-size:22px;letter-spacing:-.7px;color:var(--text-main);}
  .gallery-view-all{flex-shrink:0;border:1px solid var(--glass-border);border-radius:999px;padding:9px 12px;background:var(--glass-bg);color:var(--text-main);font-size:11px;font-weight:700;cursor:pointer;}
  .gallery-view-all span{color:#9b87ff;margin-left:5px;}
  .gallery-grid-compact{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;}
  .gallery-grid-compact .gallery-card{border-radius:16px;}
  .gallery-grid-compact .gallery-card-media{aspect-ratio:5/4;}
  .gallery-grid-compact .gallery-card-info{padding:11px 10px 13px;gap:8px;}
  .gallery-grid-compact .gallery-card-copy h3{font-size:11px;}
  .gallery-grid-compact .gallery-card-copy p{font-size:10px;}
  .gallery-grid-compact .gallery-open-hint{display:none;}
  .gallery-bottom-link{text-align:center;margin-top:23px;}
  .gallery-bottom-link button{border:0;background:linear-gradient(110deg,#7c5cfc,#4e91f7);color:#fff;border-radius:999px;padding:12px 20px;font-size:12px;font-weight:800;box-shadow:0 8px 22px rgba(124,92,252,.24);cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;}
  .gallery-bottom-link button:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(124,92,252,.34);}
  .gallery-bottom-link button span{margin-left:8px;}
  .gallery-empty{padding:45px 22px;border:1px dashed rgba(139,112,245,.35);border-radius:22px;text-align:center;background:linear-gradient(135deg,rgba(124,92,252,.07),rgba(56,217,245,.035));}
  .gallery-empty-icon{width:58px;height:58px;margin:0 auto 15px;display:grid;place-items:center;border-radius:18px;color:#9b87ff;background:rgba(124,92,252,.12);border:1px solid rgba(124,92,252,.2);}
  .gallery-empty h3{font-size:16px;color:var(--text-main);margin-bottom:7px;}
  .gallery-empty p{font-size:12px;line-height:1.6;color:var(--ct5);}
  .gallery-lightbox{position:fixed;inset:0;z-index:100000;background:rgba(7,5,18,.94);backdrop-filter:blur(18px);display:flex;align-items:center;justify-content:center;padding:56px 64px 32px;animation:galleryLightboxIn .22s ease-out both;}
  .gallery-lightbox-content{width:min(100%,1000px);max-height:100%;display:flex;flex-direction:column;align-items:center;gap:14px;animation:galleryImageIn .32s cubic-bezier(.2,.7,.2,1) both;}
  .gallery-lightbox-content img{display:block;max-width:100%;max-height:calc(100vh - 150px);object-fit:contain;border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,.38);}
  .gallery-lightbox-caption{text-align:center;color:rgba(255,255,255,.65);font-size:12px;line-height:1.6;}
  .gallery-lightbox-title{font-size:15px;font-weight:800;color:#fff;margin-bottom:3px;}
  .gallery-lightbox-caption span{display:block;margin-top:6px;font-size:10px;color:rgba(255,255,255,.42);letter-spacing:1px;}
  .gallery-lightbox-close,.gallery-lightbox-nav{position:fixed;z-index:2;display:grid;place-items:center;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.09);color:#fff;border-radius:50%;cursor:pointer;backdrop-filter:blur(12px);transition:background .2s ease,transform .2s ease;}
  .gallery-lightbox-close{top:18px;right:18px;width:42px;height:42px;font-size:28px;font-weight:300;}
  .gallery-lightbox-nav{top:50%;width:44px;height:44px;font-size:35px;font-weight:300;line-height:1;transform:translateY(-50%);}
  .gallery-lightbox-prev{left:18px;}.gallery-lightbox-next{right:18px;}
  .gallery-lightbox-close:hover,.gallery-lightbox-nav:hover{background:rgba(124,92,252,.55);transform:translateY(-50%) scale(1.05);}
  .gallery-lightbox-close:hover{transform:scale(1.05);}
  @keyframes galleryCardEnter{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
  @keyframes galleryLightboxIn{from{opacity:0;}to{opacity:1;}}
  @keyframes galleryImageIn{from{opacity:0;transform:scale(.985);}to{opacity:1;transform:scale(1);}}
  @media(max-width:760px){.gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;}.gallery-heading{margin-bottom:24px;}.gallery-heading p{font-size:12px;padding:0 12px;}.gallery-card{border-radius:16px;}.gallery-card-info{padding:11px 10px 13px;gap:8px;}.gallery-card-copy h3{font-size:11px;}.gallery-card-copy p{font-size:10px;}.gallery-lightbox{padding:60px 14px 28px;}.gallery-lightbox-nav{width:38px;height:38px;font-size:30px;}.gallery-lightbox-prev{left:8px;}.gallery-lightbox-next{right:8px;}.gallery-lightbox-content img{max-height:calc(100vh - 160px);}}
  @media(max-width:380px){.gallery-grid-compact{gap:8px;}.gallery-grid-compact .gallery-card-info{padding:9px 8px;}.gallery-compact-heading h3{font-size:19px;}}
  @media(prefers-reduced-motion:reduce){.gallery-card,.gallery-card-image,.gallery-open-hint,.gallery-lightbox,.gallery-lightbox-content,.gallery-bottom-link button{animation:none!important;transition:none!important;}}
  @keyframes shimmerTxt{0%{background-position:-200% 0;}100%{background-position:200% 0;}}
  @keyframes orbit1{from{transform:rotate(0deg) translateX(108px) rotate(0deg);}to{transform:rotate(360deg) translateX(108px) rotate(-360deg);}}
  @keyframes orbit2{from{transform:rotate(180deg) translateX(76px) rotate(-180deg);}to{transform:rotate(540deg) translateX(76px) rotate(-540deg);}}
  @keyframes rotBorder{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
  @keyframes splashShimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  @keyframes splashExit{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.04)}}
  @keyframes particleDrift{0%,100%{transform:translateY(0) scale(1);opacity:0.5}50%{transform:translateY(-28px) scale(1.3);opacity:1}}
  @keyframes typingDot{0%,100%{opacity:0.3;transform:scale(0.8);}50%{opacity:1;transform:scale(1);}}
  @keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(248,113,113,0.7)}50%{opacity:0.8;box-shadow:0 0 0 12px rgba(248,113,113,0)}}
  @keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
  .shimmer-text{background:linear-gradient(90deg,#f0eeff 0%,#b57bee 28%,#38d9f5 50%,#b57bee 72%,#f0eeff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerTxt 4s linear infinite;}
  .grid-bg{background-image:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px);background-size:44px 44px;}
  @media(max-width:768px){.hero-split{flex-direction:column!important;}.hero-orb-col{display:none!important;}.hero-ctas{justify-content:center!important;}.hero-left{text-align:center;align-items:center!important;}.feat-grid{grid-template-columns:1fr 1fr!important;}}
@media(max-width:576px){.mobile-topbar{padding:12px 14px;}.mobile-side-panel{width:240px;}.mobile-menu-indicator{top:82px;left:10px;padding:10px 12px;font-size:13px;}}
.mobile-shell{display:none;}

  /* INSTAGRAM STYLE MOBILE BOTTOM NAV */
  .mobile-bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .mobile-bottom-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 68px;
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    z-index: 9990;
  }
}

  @media (max-width: 768px) {
    .mobile-bottom-nav {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 6px 18px;
      background: rgba(255,255,255,0.96);
      border-top: 1px solid rgba(0,0,0,0.08);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      z-index: 9990;
      box-shadow: 0 -8px 30px rgba(0,0,0,0.08);
      padding-bottom: calc(6px + env(safe-area-inset-bottom));
    }

    .icon-inline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .mobile-nav-label {
      display: block;
      font-size: 9px;
      line-height: 1;
      margin-top: 3px;
      font-weight: 700;
      opacity: .58;
      letter-spacing: .01em;
    }

    .mobile-nav-item.active .mobile-nav-label {
      opacity: 1;
    }

    .mobile-nav-item {
      position: relative;
      width: 54px;
      height: 54px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .mobile-nav-item svg {
      width: 29px;
      height: 29px;
      fill: none;
      stroke: #111;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform .18s ease;
    }

    .mobile-nav-item.active::before {
      content: '';
      position: absolute;
      top: 4px;
      width: 42px;
      height: 42px;
      background: rgba(124,92,252,0.12);
      border-radius: 50%;
      z-index: 0;
      box-shadow: 0 4px 14px rgba(124,92,252,0.3);
    }
    .mobile-nav-item.active svg {
      fill: none;
      stroke: #7c5cfc;
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }
    .mobile-nav-item.active .mobile-nav-label {
      color: #7c5cfc;
      opacity: 1;
      position: relative;
      z-index: 1;
    }

    .mobile-nav-item:active svg {
      transform: scale(.88);
    }

    .mobile-post-button {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: #111;
      color: white;
      cursor: pointer;
      box-shadow: 0 5px 18px rgba(0,0,0,.22);
      transition: transform .18s ease;
      -webkit-tap-highlight-color: transparent;
    }

    .mobile-post-button span {
      font-size: 32px;
      line-height: 1;
      font-weight: 300;
      margin-top: -2px;
    }

    .mobile-post-button:active {
      transform: scale(.88);
    }

    .mobile-profile-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111;
      border: 2px solid #111;
      font-size: 12px;
      font-weight: 700;
      color: white;
    }

    .mobile-profile-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .mobile-profile-dot {
      position: absolute;
      right: 5px;
      bottom: 7px;
      width: 11px;
      height: 11px;
      background: #ff3040;
      border: 2px solid white;
      border-radius: 50%;
    }

    .mobile-profile-item.active .mobile-profile-avatar {
      border: 2px solid #111;
      transform: scale(1.04);
    }

    body {
      padding-bottom: 72px;
    }
  }

`;

const uuid = () => Math.random().toString(36).slice(2, 10).toUpperCase();
const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const STATUS_META: Record<string, { color: string; bg: string; label: string }> = {
  Pending:       { color: "#f4c95d", bg: "rgba(244,201,93,0.15)",  label: "⏳ Pending" },
  "In Progress": { color: "#7c5cfc", bg: "rgba(124,92,252,0.15)",  label: "🔄 In Progress" },
  Resolved:      { color: "#4ade80", bg: "rgba(74,222,128,0.15)",  label: "✅ Resolved" },
  Rejected:      { color: "#f87171", bg: "rgba(248,113,113,0.15)", label: "❌ Rejected" },
};
const PRIORITY_META: Record<string, { color: string; label: string }> = {
  Low:    { color: "#a89ec9", label: "Low" },
  Medium: { color: "#f4c95d", label: "Medium" },
  High:   { color: "#fb923c", label: "High" },
  Urgent: { color: "#f87171", label: "🚨 Urgent" },
};
const CATEGORIES = ["Water Supply","Road / Path","Electricity","Drainage","Sanitation","Education","Health","Street Light","Other"];
const WARDS = ["Chhatarsar", "Pahrajpur", "Chakjalal", "Chakmoti", "Chakjiya", "Other"];
const CAT_COLORS: Record<string, string> = {
  "Water Supply":"#38d9f5","Road / Path":"#b57bee","Electricity":"#f4c95d",
  "Drainage":"#7c5cfc","Sanitation":"#4ade80","Education":"#f87171",
  "Health":"#fb923c","Street Light":"#fbbf24","Other":"#6b7280",
};

interface LatLng { lat: number; lng: number; }
interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  village: string;
  date: string;
  photo?: string;
}
interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption?: string;
  url: string;
  createdAt: string;
}
interface Notice {
  id: string;
  title: string;
  body: string;
  type: "urgent" | "meeting" | "scheme" | "event" | "general";
  date: string;
  createdAt: string;
}
interface Feedback {
  id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
}
interface CommentItem { id: string; userId: string; userName: string; userAvatar?: string; text: string; createdAt: string; }
interface Problem {
  id: string; name: string; mobile: string; ward: string;
  category: string; title: string; description: string; caption?: string;
  priority: string; status: string; submittedAt: string;
  adminNotes: string; photo?: string;
  locationText?: string;
  locationCoords?: LatLng;
  authorId?: string;
  authorAvatar?: string;
  supporters?: string[];
  likes?: string[];
  comments?: CommentItem[];
  reports?: Array<{ id: string; userId: string; userName: string; reason: string; details?: string; createdAt: string }>;
  moderationStatus?: string;
  resolutionChallenge?: { userId: string; reason: string; createdAt: string };
  resolutionChallengeAt?: string;
  resolvedAt?: string | null;
  warningSentAt?: string;
}

const compressImage = (file: File, maxW = 400, quality = 0.3): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width  = img.width  * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target!.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });


// ── Lucide UI icon helper ─────────────────────────────────────────────────────
function UiIcon({
  name,
  size = 18,
  strokeWidth = 2,
  className
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const props = { size, strokeWidth, className };

  const icons: Record<string, React.ReactNode> = {
    "📷": <Camera {...props} />,
    "🖼️": <ImageIcon {...props} />,
    "🎬": <Video {...props} />,
    "🗑": <Trash2 {...props} />,
    "👤": <User {...props} />,
    "📢": <Megaphone {...props} />,
    "🏆": <Trophy {...props} />,
    "🔐": <LockKeyhole {...props} />,
    "🔍": <Search {...props} />,
    "📞": <Phone {...props} />,
    "⬇️": <Download {...props} />,
    "⚙️": <Settings {...props} />,
    "✏️": <Pencil {...props} />,
    "⚠️": <AlertTriangle {...props} />,
    "🚨": <Siren {...props} />,
    "📅": <CalendarDays {...props} />,
    "📍": <MapPin {...props} />,
    "🗺": <Map {...props} />,
    "📋": <Clipboard {...props} />,
    "📌": <Pin {...props} />,
    "📝": <FileText {...props} />,
    "🎤": <Mic {...props} />,
    "⭐": <Star {...props} />,
    "⏳": <Clock3 {...props} />,
    "🔄": <RefreshCw {...props} />,
    "❌": <XCircle {...props} />,
    "✅": <CheckCircle2 {...props} />,
    "🏛": <Building2 {...props} />,
    "🎉": <PartyPopper {...props} />,
    "💧": <Droplets {...props} />,
    "⚡": <Zap {...props} />,
    "🏥": <Hospital {...props} />,
    "🌊": <Waves {...props} />,
    "🏗": <HardHat {...props} />,
    "🛣": <Map {...props} />,
    "⌂": <Home {...props} />,
    "▦": <LayoutDashboard {...props} />,
    "＋": <Plus {...props} />,
    "➕": <Plus {...props} />,
    "🔎": <Search {...props} />,
    "🛡": <ShieldAlert {...props} />,
    "📤": <Upload {...props} />,
    "◉": <CircleUserRound {...props} />
  };

  return icons[name] ?? null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function AnimatedHeading({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); 


return () => clearTimeout(t); }, []);
  const lines = text.split("\n"); let charIdx = 0;
  return (
    <h1 style={{ margin: 0 }}>
      {lines.map((line, idx) => (
        <div key={idx} style={{ display: "block" }}>
          {line.split("").map((ch) => {
            const delay = 200 + charIdx++ * 28;
            return (
              <span key={delay} style={{ display: "inline-block", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)", transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`, whiteSpace: ch === " " ? "pre" : "normal" }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}

function FadeIn({ delay = 0, children, style = {} }: { delay?: number; children: React.ReactNode; style?: React.CSSProperties }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(12px)", transition: "opacity 700ms ease, transform 700ms ease", ...style }}>{children}</div>;
}

function Badge({ text, color, bg }: { text: string; color: string; bg?: string }) {
  return <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, color, background: bg || color + "22", letterSpacing: "0.03em", display: "inline-block" }}>{text}</span>;
}

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 4000); return () => clearTimeout(t); }, [onClose]);
  return <div style={{ position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.8)", color: "#fff", padding: "10px 20px", borderRadius: 20, zIndex: 10000, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>{msg}</div>;
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="glass" style={{ borderRadius: 16, padding: "20px 24px", flex: 1, minWidth: 120 }}>
        <style dangerouslySetInnerHTML={{__html: `
      input, textarea, select {
        color: var(--text-main) !important;
        -webkit-text-fill-color: var(--text-main) !important;
        background-color: var(--cbg5) !important;
        border: 1px solid rgba(127,127,127,0.3) !important;
      }
      input::placeholder, textarea::placeholder {
        color: var(--text-main) !important;
        -webkit-text-fill-color: var(--text-main) !important;
        opacity: 0.5 !important;
      }
    `}} />
                <div style={{ fontSize: 28, fontWeight: 800, color }}>{value}</div>
                <div style={{ fontSize: 13, color: "var(--ct5)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ── Section heading for settings ──────────────────────────────────────────────
function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ width: 22, height: 22, display: "grid", placeItems: "center" }}>
        <UiIcon name={icon} size={19} />
      </span>
              </div>
  );
}

// ── Photo Upload ──────────────────────────────────────────────────────────────
function PhotoUpload({ photo, onPhoto }: { photo: string | null; onPhoto: (b64: string | null) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [compressing, setCompressing] = useState(false);

  const process = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setCompressing(true);
    try { onPhoto(await compressImage(file)); } catch (_) {}
    setCompressing(false);
  };
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if (f) process(f); };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {photo ? (
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
          <img src={photo} alt="Problem photo" style={{ width: "100%", maxHeight: 240, objectFit: "cover", display: "block" }} />
          <button onClick={() => onPhoto(null)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer" }}>✕ Remove</button>
        </div>
      ) : (
        <div onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={onDrop} onClick={() => inputRef.current?.click()}
          style={{ border: `2px dashed ${dragging ? "var(--ct4)" : "rgba(255,255,255,0.14)"}`, borderRadius: 12, padding: "28px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.2s", background: dragging ? "var(--cbg4)" : "transparent" }}>
          {compressing ? <div style={{ fontSize: 13, color: "var(--ct4)" }}>Compressing…</div> : (
            <><Camera size={28} style={{ marginBottom: 8 }} />
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ct6)" }}>Click or drag a photo here</div><div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}><button type="button" onClick={() => { const el = document.createElement("input"); el.type = "file"; el.accept = "image/*"; el.capture = "environment"; el.onchange = (e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) process(f); }; el.click(); }} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--ct4)", color: "var(--cbg)", fontSize: 12, cursor: "pointer" }}><Camera size={14} /> Camera</button><button type="button" onClick={() => inputRef.current?.click()} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "var(--ct4)", color: "var(--cbg)", fontSize: 12, cursor: "pointer" }}><ImageIcon size={14} /> Gallery</button></div>
            <div style={{ fontSize: 11, color: "var(--ct3)", marginTop: 4 }}>JPG, PNG, WebP · auto-compressed</div></>
          )}
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) process(f); e.target.value = ""; }} />
    </div>
  );
}

// ── Problem Card ──────────────────────────────────────────────────────────────
function ProblemCard({ problem, isAdmin, onUpdate, onDelete }: {
  problem: Problem; isAdmin: boolean;
  onUpdate: (id: string, changes: Partial<Problem>) => void;
  onDelete?: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(problem.status);
  useEffect(() => setStatus(problem.status), [problem.status]);
  const [notes, setNotes]   = useState(problem.adminNotes || "");
  const [confirmDel, setConfirmDel] = useState(false);
  const sm = STATUS_META[status];
  const pm = PRIORITY_META[problem.priority];

  const shareOnWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const s = STATUS_META[problem.status];
    const msg =
      `*ग्राम सभा पहराजपुर — समस्या रिपोर्ट*\n\n` +
      `📋 *ID:* #${problem.id}\n📌 *शीर्षक:* ${problem.title}\n🗂 *श्रेणी:* ${problem.category}\n` +
      `📍 *वार्ड:* ${problem.ward}\n⚡ *प्राथमिकता:* ${problem.priority}\n` +
      `${s.label.replace(/[⏳🔄✅❌]/g,"").trim()} *स्थिति:* ${problem.status}\n` +
      `👤 *नाम:* ${problem.name}\n📅 *तिथि:* ${fmtDate(problem.submittedAt)}\n\n` +
      `📝 *विवरण:* ${problem.description}` +
      (problem.locationText ? `\n\n📍 *स्थान:* ${problem.locationText}` : "") +
      (problem.locationCoords ? `\n🗺 *मैप:* https://maps.google.com/?q=${problem.locationCoords.lat},${problem.locationCoords.lng}` : "");
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="glass" style={{ borderRadius: 18, padding: "18px 20px", transition: "transform 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>

      <div style={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--ct35)", marginBottom: 4, fontFamily: "monospace" }}>#{problem.id}</div>
            <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>{problem.title}</div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {problem.photo && <span style={{ fontSize: 14 }} title="Has photo"><Camera size={14} /></span>}
            <Badge text={sm.label} color={sm.color} bg={sm.bg} />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Badge text={problem.category} color={CAT_COLORS[problem.category] || "#6b7280"} />
          <Badge text={problem.ward} color="var(--ct6)" bg="var(--cbg7)" />
          <Badge text={pm.label} color={pm.color} bg={pm.color + "22"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12, color: "var(--ct35)" }}>
          <a href={`tel:${problem.mobile}`} style={{color:"inherit",textDecoration:"none"}}>👤 {problem.name} · 📞 {problem.mobile}</a>
          <span>{fmtDate(problem.submittedAt)}</span>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.7 }}>{problem.description}</div>

          {/* Location text */}
          {problem.locationText && (
            <div style={{ marginTop: 12, display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 14px", background: "rgba(59,130,246,0.06)", borderRadius: 10, border: "1px solid rgba(59,130,246,0.15)" }}>
              <span style={{ fontSize: 16 }}><MapPin size={16} /></span>
              <div>
                <div style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 2 }}>Location / Landmark</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{problem.locationText}</div>
              </div>
            </div>
          )}

          {/* Map pin */}
          {problem.locationCoords && (
            <a
              href={`https://www.openstreetmap.org/?mlat=${problem.locationCoords.lat}&mlon=${problem.locationCoords.lng}#map=17/${problem.locationCoords.lat}/${problem.locationCoords.lng}`}
              target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(34,197,94,0.06)", borderRadius: 10, border: "1px solid rgba(34,197,94,0.18)", textDecoration: "none" }}>
              <span style={{ fontSize: 16 }}>🗺</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 2 }}>Map Location</div>
                <div style={{ fontSize: 12, color: "#22c55e" }}>{problem.locationCoords.lat.toFixed(5)}, {problem.locationCoords.lng.toFixed(5)}</div>
              </div>
              <span style={{ fontSize: 11, color: "var(--ct35)" }}>Open in Maps →</span>
            </a>
          )}

          {problem.photo && (
            <div style={{ marginTop: 14, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.10)" }}>
              <img src={problem.photo} alt="Problem photo" style={{ width: "100%", maxHeight: 320, objectFit: "cover", display: "block", cursor: "zoom-in" }}
                onClick={e => { e.stopPropagation(); window.open(problem.photo, "_blank"); }} />
              <div style={{ padding: "6px 12px", fontSize: 11, color: "var(--ct3)", background: "rgba(0,0,0,0.3)" }}><Camera size={13} style={{ verticalAlign: "middle" }} /> Photo attached · click to open full size</div>
            </div>
          )}

          {problem.adminNotes && (
            <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(59,130,246,0.08)", borderRadius: 10, fontSize: 13, color: "var(--ct6)", borderLeft: "2px solid #3b82f6" }}>
              <span style={{ color: "#3b82f6", fontWeight: 600 }}>Admin Note: </span>{problem.adminNotes}
            </div>
          )}

          {problem.resolutionChallenge && (
            <div style={{ marginTop: 12, padding: "11px 14px", background: "rgba(244,201,93,0.10)", borderRadius: 10, fontSize: 13, color: "var(--ct6)", borderLeft: "3px solid #f4c95d" }}>
              <div style={{ color: "#f4c95d", fontWeight: 700, marginBottom: 4 }}>⚠️ Resolution challenged — Admin review required</div>
              <div style={{ fontSize: 12, lineHeight: 1.6 }}>{problem.resolutionChallenge.reason}</div>
              <div style={{ fontSize: 10, color: "var(--ct4)", marginTop: 5 }}>Submitted by {problem.resolutionChallenge.userId} · {fmtDate(problem.resolutionChallenge.createdAt)}</div>
            </div>
          )}

          {/* WhatsApp Share */}
          <button onClick={shareOnWhatsApp}
            style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center", padding: "10px 0", borderRadius: 10, border: "none", background: "rgba(37,211,102,0.12)", color: "#25d366", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(37,211,102,0.22)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(37,211,102,0.12)")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Share on WhatsApp
          </button>

          {/* Admin Controls */}
          {isAdmin && (
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                  {Object.keys(STATUS_META).map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="btn-white" style={{ borderRadius: 10, fontSize: 13 }} onClick={() => { onUpdate(problem.id, { status, adminNotes: notes }); }}>
                  💾 Save Changes
                </button>
              </div>
              <textarea rows={2} placeholder="Add admin note visible to public…" value={notes} onChange={e => setNotes(e.target.value)} />

              {/* Delete */}
              {!confirmDel ? (
                <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(true); }}>
                  🗑 Delete This Issue
                </button>
              ) : (
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-danger" style={{ borderRadius: 10, padding: "8px 0", fontSize: 13, flex: 1 }} onClick={e => { e.stopPropagation(); onDelete?.(problem.id); }}>
                    Confirm Delete
                  </button>
                  <button className="btn-ghost" style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13 }} onClick={e => { e.stopPropagation(); setConfirmDel(false); }}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Location Picker (no external library) ────────────────────────────────────
const DEFAULT_CENTER: LatLng = { lat: 26.42, lng: 82.68 };

function LocationPicker({ coords, onCoords }: { coords: LatLng | null; onCoords: (c: LatLng | null) => void }) {
  const [open, setOpen] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsErr, setGpsErr] = useState<string | null>(null);
  const [manualLat, setManualLat] = useState(coords ? String(coords.lat) : "");
  const [manualLng, setManualLng] = useState(coords ? String(coords.lng) : "");

  const useGPS = () => {
if (!navigator.geolocation) { setGpsErr("GPS not supported."); return; }
    setGpsLoading(true); setGpsErr(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latlng: LatLng = { lat: parseFloat(pos.coords.latitude.toFixed(6)), lng: parseFloat(pos.coords.longitude.toFixed(6)) };
        onCoords(latlng);
        setManualLat(String(latlng.lat));
        setManualLng(String(latlng.lng));
        setGpsLoading(false);
      },
      () => { setGpsErr("GPS failed. Enter coordinates manually."); setGpsLoading(false); }
    );
  };

  const applyManual = () => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    if (isNaN(lat) || isNaN(lng)) { setGpsErr("Invalid coordinates."); return; }
    onCoords({ lat, lng });
    setGpsErr(null);
  };

  const mapSrc = coords
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng-0.005},${coords.lat-0.005},${coords.lng+0.005},${coords.lat+0.005}&layer=mapnik&marker=${coords.lat},${coords.lng}`
    : `https://www.openstreetmap.org/export/embed.html?bbox=${DEFAULT_CENTER.lng-0.02},${DEFAULT_CENTER.lat-0.02},${DEFAULT_CENTER.lng+0.02},${DEFAULT_CENTER.lat+0.02}&layer=mapnik`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button type="button" onClick={() => setOpen(!open)} className="btn-ghost"
        style={{ borderRadius: 12, padding: "10px 0", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        🗺 {coords ? `📍 Location Set (${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)})` : "Set Location (optional)"}
      </button>

      {open && (
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ background: "rgba(0,0,0,0.5)", padding: "10px 14px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <button type="button" onClick={useGPS} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>
              {gpsLoading ? "Locating…" : "📡 Use My GPS"}
            </button>
            <span style={{ fontSize: 11, color: "var(--ct4)" }}>or enter manually:</span>
            <input value={manualLat} onChange={e => setManualLat(e.target.value)} placeholder="Latitude" style={{ width: 100, fontSize: 12, padding: "5px 8px" }} />
            <input value={manualLng} onChange={e => setManualLng(e.target.value)} placeholder="Longitude" style={{ width: 100, fontSize: 12, padding: "5px 8px" }} />
            <button type="button" onClick={applyManual} className="btn-ghost" style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12 }}>Set</button>
            {coords && <button type="button" onClick={() => { onCoords(null); setManualLat(""); setManualLng(""); }} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 12 }}>✕ Clear</button>}
            <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--ct4)", cursor: "pointer", marginLeft: "auto" }}>✕</button>
          </div>
          {gpsErr && <div style={{ background: "rgba(239,68,68,0.1)", padding: "8px 14px", fontSize: 12, color: "#f87171" }}>{gpsErr}</div>}
          <iframe src={mapSrc} title="Location Map" style={{ width: "100%", height: 260, border: "none", display: "block" }} loading="lazy" />
          <div style={{ padding: "6px 12px", background: "rgba(0,0,0,0.4)", fontSize: 11, color: "var(--ct3)" }}>
            Map preview · Use GPS or enter coordinates above
          </div>
        </div>
      )}
    </div>
  );
}

// ── Submit Form ───────────────────────────────────────────────────────────────
function SubmitForm({ onSubmit, onSubmitted, sarpanchName = "", sarpanchPhoto = "", currentUser, voiceDraft = "" }: { onSubmit: (p: Problem) => Promise<void>; onSubmitted?: () => void; sarpanchName?: string; sarpanchPhoto?: string; currentUser?: AppUser | null; voiceDraft?: string }) {
  const [caption, setCaption] = useState("");
  const [form, setForm] = useState({ name: currentUser?.name || "", mobile: currentUser?.mobile || "", ward: currentUser?.ward || WARDS[0], category: CATEGORIES[0], title: "", description: "", priority: "Medium" });
  const [photo, setPhoto]               = useState<string | null>(null);
  const [locationText, setLocationText] = useState("");
  const [locationCoords, setLocationCoords] = useState<LatLng | null>(null);
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  useEffect(() => { if (voiceDraft.trim()) setForm(f => ({ ...f, description: [f.description, voiceDraft.trim()].filter(Boolean).join(" ") })); }, [voiceDraft]);

  // 🎤 Voice-to-Text for description
  const startVoiceRecording = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("🎤 Speech recognition not supported on your device");
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "hi-IN";
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => setIsRecording(true);

    recognitionRef.current.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript;
          set("description", form.description + (form.description ? " " : "") + transcript);
        }
      }
    };

    recognitionRef.current.onend = () => setIsRecording(false);
    recognitionRef.current.onerror = () => setIsRecording(false);

    recognitionRef.current.start();
  };

  const stopVoiceRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handle = async () => {
    if (!form.name || !form.mobile || !form.title || !form.description) { alert("Please fill all required fields."); return; }
    setLoading(true);
    const problem: Problem = {
      ...form, id: uuid(), submittedAt: new Date().toISOString(), status: "Pending", adminNotes: "", caption: caption.trim() || undefined, authorId: currentUser?.id, authorAvatar: currentUser?.avatar, supporters: [], likes: [], comments: [],
      photo: photo || undefined,
      locationText: locationText || undefined,
      locationCoords: locationCoords || undefined,
    };
    try {
      await onSubmit(problem);
      setForm({ name: "", mobile: "", ward: WARDS[0], category: CATEGORIES[0], title: "", description: "", priority: "Medium" });
      setCaption("");
      setPhoto(null);
      setLocationText("");
      setLocationCoords(null);
      onSubmitted?.();
    } catch (_) {
      // submission failure is already handled by onSubmit
    } finally {
      setLoading(false);
    }
  };

  const field = (label: string, children: React.ReactNode) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );

  return (
      <>
    <div className="glass" style={{ borderRadius: 22, padding: "28px 24px", maxWidth: 560, margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Your Name *", <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Full name" />)}
          {field("Mobile No. *", <input value={form.mobile} onChange={e => set("mobile", e.target.value)} placeholder="10-digit number" type="tel" />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {field("Ward / Area", <select value={form.ward} onChange={e => set("ward", e.target.value)}>{WARDS.map(w => <option key={w}>{w}</option>)}</select>)}
          {field("Category", <select value={form.category} onChange={e => set("category", e.target.value)}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select>)}
        </div>
        {field("Problem Title *", <input value={form.title} onChange={e => set("title", e.target.value)} placeholder="Short, clear title (max 100 chars)" maxLength={100} />)}
        {field("Caption (Instagram-style)", <textarea rows={2} value={caption} onChange={e => setCaption(e.target.value)} placeholder="Write a short caption for your post…" maxLength={220} />)}
        {field("Description * (Use voice or type)", (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <textarea rows={4} value={form.description} onChange={e => set("description", e.target.value)} placeholder="Describe the problem in detail..." maxLength={500} style={{ flex: 1 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 2 }}>
                <button
                  type="button"
                  onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 9,
                    border: "none",
                    background: isRecording ? "rgba(248,113,113,0.2)" : "rgba(59,130,246,0.15)",
                    color: isRecording ? "#f87171" : "#3b82f6",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  title={isRecording ? "Stop recording" : "Start voice input"}
                >
                  {isRecording ? "⏹ Stop" : "🎤 Voice"}
                </button>
              </div>
            </div>
            {isRecording && <div style={{ fontSize: 12, color: "#ef4444", fontWeight: 600 }}>🎤 Listening...</div>}
          </div>
        ))}
        {field("Photo (optional)", <PhotoUpload photo={photo} onPhoto={setPhoto} />)}
        {field("Location / Landmark (optional)", (
          <input
            value={locationText}
            onChange={e => setLocationText(e.target.value)}
            placeholder="e.g. Near Panchayat Bhawan, Ward 3 main road…"
            maxLength={200}
          />
        ))}
        {field("Pin on Map (optional)", <LocationPicker coords={locationCoords} onCoords={setLocationCoords} />)}
        {field("Priority", (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Low","Medium","High","Urgent"].map(p => (
              <label key={p} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13, padding: "7px 14px", borderRadius: 10, border: `1px solid ${form.priority === p ? "var(--ct35)" : "var(--cb10)"}`, background: form.priority === p ? "var(--cbg8)" : "transparent", color: form.priority === p ? PRIORITY_META[p].color : "var(--ct5)", transition: "all 0.2s" }}>
                <input type="radio" value={p} checked={form.priority === p} onChange={() => set("priority", p)} style={{ width: "auto", display: "none" }} />
                {PRIORITY_META[p].label}
              </label>
            ))}
          </div>
        ))}
        <button className="btn-white" onClick={handle} disabled={loading} style={{ borderRadius: 12, padding: "13px 0", fontSize: 15, fontWeight: 600, marginTop: 4 }}>
          {loading ? "Submitting…" : "Submit Problem →"}
        </button>
      </div>
    </div>

      </>
  );
}


// ── User Authentication ─────────────────────────────────────────────────────
type AppUser = { id: string; name: string; mobile: string; ward: string; createdAt: string; avatar?: string };

async function hashPassword(value: string) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function AuthPage({ onLogin }: { onLogin: (u: AppUser) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [ward, setWard] = useState(WARDS[0]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setErr("");
    const userId = id.trim().toLowerCase();
    if (!userId || !password) { setErr("ID aur password required hai."); return; }
    if (mode === "register" && (!name.trim() || !mobile.trim())) { setErr("Name aur mobile required hai."); return; }
    if (mode === "register" && mobile.replace(/\D/g, "").length < 10) { setErr("Valid 10-digit mobile number daalo."); return; }
    if (mode === "register" && password.length < 8) { setErr("Password कम-से-कम 8 अक्षरों का होना चाहिए।"); return; }
    setBusy(true);
    try {
      const endpoint = httpsCallable(functions, mode === "login" ? "authenticateGspUser" : "registerGspUser");
      const result = await endpoint(mode === "login"
        ? { id: userId, password }
        : { id: userId, password, name: name.trim(), mobile: mobile.trim(), ward });
      const payload = result.data as { token: string; user: AppUser };
      await signInWithCustomToken(auth, payload.token);
      localStorage.setItem("gsp-user", JSON.stringify(payload.user));
      onLogin(payload.user);
    } catch (e: any) {
      console.error(e);
      const code = String(e?.code || "");
      const message = String(e?.message || "");
      if (code.includes("already-exists") || message.includes("already registered")) setErr("Ye User ID already registered hai.");
      else if (code.includes("not-found") || message.includes("User ID")) setErr("User ID nahi mila. Pehle account create karo.");
      else if (code.includes("unauthenticated") || code.includes("invalid-argument")) setErr(message || "ID ya password sahi nahi hai.");
      else setErr("Login/registration नहीं हो सकी। Firebase Functions deploy होने और connection की जाँच करें।");
    } finally { setBusy(false); }
  };

  return <div style={{ maxWidth: 440, margin: "55px auto 90px" }}>
    <div className="glass" style={{ borderRadius: 24, padding: "30px 26px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ width: 64, height: 64, margin: "0 auto 14px", borderRadius: 18, background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", display: "grid", placeItems: "center", fontSize: 28, boxShadow: "0 12px 30px rgba(124,92,252,.25)" }}><User size={28} /></div>
                  <p style={{ color: "var(--ct4)", fontSize: 13, marginTop: 6 }}>Community problems & profile ke liye login karein</p>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {(["login", "register"] as const).map(m => <button key={m} className={mode === m ? "btn-white" : "btn-ghost"} onClick={() => { setMode(m); setErr(""); }} style={{ flex: 1, borderRadius: 10, padding: "10px 8px", fontSize: 13 }}>{m === "login" ? "Login" : "Register"}</button>)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mode === "register" && <>
          <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Mobile number" value={mobile} onChange={e => setMobile(e.target.value)} type="tel" maxLength={15} />
          <select value={ward} onChange={e => setWard(e.target.value)}>{WARDS.map(w => <option key={w}>{w}</option>)}</select>
        </>}
        <input placeholder="User ID" value={id} onChange={e => setId(e.target.value)} autoCapitalize="none" />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && submit()} />
        {err && <div style={{ color: "#f87171", fontSize: 13 }}>{err}</div>}
        <button className="btn-white" onClick={submit} disabled={busy} style={{ borderRadius: 12, padding: "13px 0", fontSize: 15 }}>{busy ? "Please wait…" : mode === "login" ? "Login →" : "Create Account →"}</button>
      </div>
    </div>
  </div>;
}

function requireUser(user: AppUser | null, action: () => void, showToast: (m: string) => void) {
  if (!user) { showToast("🔐 Is feature ke liye pehle User Login karo."); return; }
  action();
}


interface PublicProfileData {
  id: string;
  name: string;
  avatar?: string;
  ward?: string;
}

function PublicUserProfile({
  profile,
  problems,
  onClose
}: {
  profile: PublicProfileData;
  problems: Problem[];
  onClose: () => void;
}) {
  const userPosts = problems.filter(p =>
    (profile.id && p.authorId === profile.id) ||
    (!p.authorId && p.name === profile.name)
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,.72)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      }}
      onClick={onClose}
    >
      <div
        className="glass"
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 520,
          maxHeight: "88vh",
          overflowY: "auto",
          borderRadius: 24,
          padding: 24
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18
        }}>
          <h2 style={{
                      fontSize: 21,
            margin: 0
          }}>
            Public Profile
          </h2>

          <button
            className="btn-ghost"
            onClick={onClose}
            style={{
              borderRadius: 10,
              fontSize: 18,
              padding: "6px 10px"
            }}
          >
            ✕
          </button>
        </div>

        <div style={{
          textAlign: "center",
          padding: "10px 0 22px"
        }}>
          <div
            style={{
              width: 100,
              height: 100,
              margin: "0 auto 14px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#7c5cfc,#38d9f5)",
              display: "grid",
              placeItems: "center",
              overflow: "hidden",
              border: "3px solid rgba(255,255,255,.2)",
              fontSize: 40,
              fontWeight: 800,
              color: "#fff"
            }}
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ) : (
              <span>{(profile.name || "U").slice(0,1).toUpperCase()}</span>
            )}
          </div>

          <h3 style={{
                      fontSize: 23,
            margin: 0
          }}>
            {profile.name}
          </h3>

          <div style={{
            color: "var(--ct4)",
            fontSize: 13,
            marginTop: 6
          }}>
            🏠 {profile.ward || "Village Member"}
          </div>

          <div style={{
            color: "var(--ct4)",
            fontSize: 12,
            marginTop: 4
          }}>
            👤 Community Member
          </div>
        </div>

        <div style={{
          display: "flex",
          gap: 10,
          marginBottom: 18
        }}>
          <div
            className="glass"
            style={{
              flex: 1,
              textAlign: "center",
              padding: 12,
              borderRadius: 14
            }}
          >
            <div style={{ fontSize: 21, fontWeight: 800 }}>
              {userPosts.length}
            </div>
            <div style={{
              fontSize: 11,
              color: "var(--ct4)"
            }}>
              Posts
            </div>
          </div>

          <div
            className="glass"
            style={{
              flex: 1,
              textAlign: "center",
              padding: 12,
              borderRadius: 14
            }}
          >
            <div style={{ fontSize: 21, fontWeight: 800 }}>
              🌱
            </div>
            <div style={{
              fontSize: 11,
              color: "var(--ct4)"
            }}>
              Community
            </div>
          </div>
        </div>

        <h3 style={{
                    fontSize: 17,
          marginBottom: 10
        }}>
          📝 Community Posts
        </h3>

        {userPosts.length === 0 ? (
          <div
            className="glass"
            style={{
              borderRadius: 14,
              padding: 24,
              textAlign: "center",
              color: "var(--ct4)",
              fontSize: 13
            }}
          >
            Is user ne abhi koi post nahi ki.
          </div>
        ) : (
          userPosts.slice(0, 10).map(post => (
            <div
              key={post.id}
              className="glass"
              style={{
                borderRadius: 14,
                padding: 13,
                marginBottom: 10
              }}
            >
              <div style={{
                fontWeight: 700,
                fontSize: 14
              }}>
                {post.title}
              </div>

              <div style={{
                color: "var(--ct4)",
                fontSize: 11,
                marginTop: 5
              }}>
                {post.ward} · {fmtDate(post.submittedAt)}
              </div>

              <div style={{
                fontSize: 12,
                marginTop: 8,
                lineHeight: 1.5
              }}>
                {post.caption || post.description}
              </div>
            </div>
          ))
        )}

        <button
          className="btn-ghost"
          onClick={onClose}
          style={{
            width: "100%",
            marginTop: 8,
            borderRadius: 11,
            padding: 11
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function CommunityPostCard({
  problem,
  user,
  onUpdate,
  onOpenLogin,
  onOpenUserProfile,
  isAdmin = false
}: {
  problem: Problem;
  user: AppUser | null;
  onUpdate: (id: string, changes: any) => Promise<void> | void;
  onOpenLogin: () => void;
  onOpenUserProfile?: (profile: PublicProfileData) => void;
  isAdmin?: boolean;
}) {
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const likes = problem.likes || [];
  const supporters = problem.supporters || [];
  const comments = problem.comments || [];
  const liked = !!user && likes.includes(user.id);
  const supported = !!user && supporters.includes(user.id);
  const doAuth = (fn: () => void) => { if (!user) { onOpenLogin(); return; } fn(); };
  const toggleArray = async (field: "likes" | "supporters") => {
    if (!user) { onOpenLogin(); return; }
    const arr = field === "likes" ? likes : supporters;
    const has = arr.includes(user.id);
    await onUpdate(problem.id, { [field]: has ? arrayRemove(user.id) : arrayUnion(user.id) });
  };
  const addComment = async () => {
    if (!user) { onOpenLogin(); return; }
    if (!comment.trim()) return;
    const c: CommentItem = { id: uuid(), userId: user.id, userName: user.name, userAvatar: user.avatar, text: comment.trim(), createdAt: new Date().toISOString() };
    await onUpdate(problem.id, { comments: arrayUnion(c) });
    setComment(""); setShowComments(true);
  };
  const cardRef = useRef<HTMLElement>(null);
  const [sharing, setSharing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState("गलत या झूठी जानकारी");
  const [reportDetails, setReportDetails] = useState("");
  const [challengeReason, setChallengeReason] = useState("");
  const [showChallenge, setShowChallenge] = useState(false);
  const reportReasons = ["गलत या झूठी जानकारी", "अश्लील या अनुचित वीडियो", "गाली-गलौज या उत्पीड़न", "स्पैम या बार-बार एक ही पोस्ट", "गाँव की समस्या से संबंधित नहीं", "अन्य"];
  const submitPostReport = async () => {
    if (!user) { onOpenLogin(); return; }
    const report = { id: `${user.id}-${Date.now()}`, userId: user.id, userName: user.name, reason: reportReason, details: reportDetails.trim(), createdAt: new Date().toISOString() };
    await onUpdate(problem.id, { reports: [...(problem.reports || []), report], moderationStatus: "reported" });
    setShowReport(false); setReportDetails("");
  };
  const moderatePost = async (action: "keep" | "remove" | "warn") => {
    if (action === "keep") await onUpdate(problem.id, { reports: [], moderationStatus: "visible" });
    if (action === "remove") await onUpdate(problem.id, { reports: [], moderationStatus: "removed", removedAt: new Date().toISOString() });
    if (action === "warn") {
      const reason = (problem.reports || []).map(r => r.reason).join(", ") || "Admin warning";
      await addDoc(collection(db, "userWarnings"), { userId: problem.authorId || "", userName: problem.name, contentType: "post", contentId: problem.id, reason, createdAt: new Date().toISOString() });
      await onUpdate(problem.id, { reports: [], moderationStatus: "visible", warningSentAt: new Date().toISOString(), warningReason: reason });
    }
  };
  const challengePostResolution = async () => {
    if (!user || !(problem.authorId === user.id || (problem.mobile === user.mobile && problem.name === user.name)) || !challengeReason.trim()) return;
    await onUpdate(problem.id, { status: "In Progress", resolutionChallenge: { userId: user.id, reason: challengeReason.trim(), createdAt: new Date().toISOString() }, resolutionChallengeAt: new Date().toISOString(), resolvedAt: null });
    setShowChallenge(false); setChallengeReason("");
  };
  
  const share = async () => {
    if (!cardRef.current) return;
    setSharing(true);
    
    const el = cardRef.current;

    try {
      if (!(window as any).htmlToImage) {
        await new Promise((res, rej) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
          script.onload = res;
          script.onerror = rej;
          document.head.appendChild(script);
        });
      }

      await new Promise(r => setTimeout(r, 150));
      
      // Screen ka current background color nikal kar image me daalna taaki glass effect perfect aaye
      const bgColor = window.getComputedStyle(document.body).backgroundColor;

      const dataUrl = await (window as any).htmlToImage.toPng(el, {
        quality: 1.0,
        pixelRatio: 3, // Ultra HD quality
        backgroundColor: bgColor, 
        style: { transform: 'scale(1)', margin: '0' }
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], `post-${problem.id}.png`, { type: "image/png" });
      const text = `${problem.title}\nBy ${problem.name}\nGram Sabha Pahrajpur`;
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try { await navigator.share({ title: problem.title, text: text, files: [file] }); } 
        catch (err) { console.log(err); }
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `post-${problem.id}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      console.error(e);
      alert("Sharing failed. Please try again.");
    } finally {
      setSharing(false);
    }
  };

  if (problem.moderationStatus === "removed" && !isAdmin) return null;
  return <article ref={cardRef} className="glass" style={{ borderRadius: 18, overflow: "hidden", marginBottom: 16 }}>
    <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
      <div
        title={problem.authorAvatar ? "Profile Photo" : "Profile"}
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#7c5cfc,#38d9f5)",
          display: "grid",
          placeItems: "center",
          fontWeight: 800,
          color: "#fff",
          overflow: "hidden",
          flexShrink: 0
        }}
      >
        {problem.authorAvatar ? (
          <img
            src={problem.authorAvatar}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span>{(problem.name || "U").slice(0,1).toUpperCase()}</span>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 700, fontSize: 13 }}>{problem.name}</div><div style={{ color: "var(--ct4)", fontSize: 11 }}>{problem.ward} · {fmtDate(problem.submittedAt)}</div></div>
      <Badge text={STATUS_META[problem.status]?.label || problem.status} color={STATUS_META[problem.status]?.color || "#aaa"} />
    </div>
              <div style={{ padding: "12px 16px 16px" }}>
      {user && (user.id === problem.authorId || (user.mobile === problem.mobile && user.name === problem.name)) && problem.warningSentAt && <div style={{ padding: "9px 11px", borderRadius: 10, background: "rgba(244,201,93,.12)", color: "#f4c95d", fontSize: 12, marginBottom: 10 }}>Admin ने इस पोस्ट पर चेतावनी जारी की है। कारण: {(problem as any).warningReason || "सामुदायिक नियमों की समीक्षा"}.</div>}
      <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}><Badge text={problem.category} color={CAT_COLORS[problem.category] || "#aaa"} /><Badge text={problem.priority} color={PRIORITY_META[problem.priority]?.color || "#aaa"} /></div>
      <div style={{ fontSize: 15, fontWeight: 700 }}>{problem.title}</div>
      <div style={{ color: "var(--ct65)", fontSize: 13, lineHeight: 1.6, marginTop: 5 }}>{problem.caption || problem.description}</div>
      {problem.photo && (
        <div style={{ marginTop: 12, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)" }}>
          <img src={problem.photo} alt="Problem attached" style={{ width: "100%", maxHeight: 400, objectFit: "cover", display: "block", cursor: "zoom-in" }} onClick={() => window.open(problem.photo, "_blank")} />
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, borderTop: "1px solid var(--cbg7)", paddingTop: 10 }}>
        <button className="btn-ghost" onClick={() => doAuth(() => toggleArray("likes"))} style={{ border: "none", borderRadius: 10, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6, color: "var(--text-main)", background: "transparent" }}><Heart size={22} fill={liked ? "#ef4444" : "none"} color={liked ? "#ef4444" : "currentColor"} style={{ transition: "transform 0.2s", transform: liked ? "scale(1.15)" : "scale(1)" }} /> <span style={{ fontSize: 13, fontWeight: 600 }}>{likes.length > 0 ? likes.length : ""}</span></button>
        <button className="btn-ghost" onClick={() => setShowComments(v => !v)} style={{ border: "none", borderRadius: 10, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6, color: "var(--text-main)", background: "transparent" }}><MessageCircle size={22} color="currentColor" /> <span style={{ fontSize: 13, fontWeight: 600 }}>{comments.length > 0 ? comments.length : ""}</span></button>
        <button className="btn-ghost" onClick={share} disabled={sharing} style={{ border: "none", borderRadius: 10, padding: "6px 8px", display: "flex", alignItems: "center", gap: 6, color: "var(--text-main)", background: "transparent" }}>{sharing ? <Clock3 size={22} /> : <Send size={22} color="currentColor" />}</button>
        <button onClick={() => doAuth(() => toggleArray("supporters"))} style={{ marginLeft: "auto", borderRadius: 999, padding: "8px 14px", border: `1px solid ${supported ? "rgba(74,222,128,.5)" : "var(--btn-ghost-border)"}`, background: supported ? "rgba(74,222,128,.12)" : "var(--btn-ghost-bg)", color: supported ? "#4ade80" : "var(--btn-ghost-color)", cursor: "pointer", fontWeight: 700, fontSize: 12 }}>{supported ? "✓ Supporting" : "+ Support"} · {supporters.length}</button>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
        {user && user.id !== problem.authorId && <button className="btn-ghost" onClick={() => setShowReport(v => !v)} style={{ borderRadius: 9, padding: "7px 10px", fontSize: 11 }}>Report Post</button>}
        {user && (user.id === problem.authorId || (user.mobile === problem.mobile && user.name === problem.name)) && problem.status === "Resolved" && <button className="btn-ghost" onClick={() => setShowChallenge(v => !v)} style={{ borderRadius: 9, padding: "7px 10px", fontSize: 11 }}>Challenge Resolution</button>}
        {isAdmin && (problem.reports || []).length > 0 && <span style={{ color: "#f87171", fontSize: 11, alignSelf: "center" }}>Reports: {problem.reports!.length}</span>}
      </div>
      {showReport && <div style={{ display: "grid", gap: 8, marginTop: 10 }}><select value={reportReason} onChange={e => setReportReason(e.target.value)}>{reportReasons.map(reason => <option key={reason}>{reason}</option>)}</select><textarea value={reportDetails} onChange={e => setReportDetails(e.target.value)} rows={2} placeholder="अतिरिक्त विवरण (वैकल्पिक)" /><button className="btn-white" onClick={() => void submitPostReport()} style={{ borderRadius: 9, padding: 9 }}>रिपोर्ट भेजें</button></div>}
      {showChallenge && <div style={{ display: "grid", gap: 8, marginTop: 10 }}><textarea value={challengeReason} onChange={e => setChallengeReason(e.target.value)} rows={2} placeholder="काम पूरा न होने का कारण लिखें…" /><button className="btn-white" onClick={() => void challengePostResolution()} style={{ borderRadius: 9, padding: 9 }}>Challenge भेजें</button></div>}
      {isAdmin && (problem.reports || []).length > 0 && <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--glass-border)" }}><strong style={{ fontSize: 12 }}>Admin Moderation</strong>{problem.reports!.map(report => <p key={report.id} style={{ fontSize: 11, color: "var(--ct4)", marginTop: 5 }}>{report.reason}{report.details ? ` — ${report.details}` : ""}</p>)}<div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 9 }}><button className="btn-ghost" onClick={() => void moderatePost("keep")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Keep Post</button><button className="btn-danger" onClick={() => void moderatePost("remove")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Remove Post</button><button className="btn-ghost" onClick={() => void moderatePost("warn")} style={{ borderRadius: 8, padding: "7px 9px", fontSize: 11 }}>Warn User</button></div></div>}
      {showComments && <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--cbg7)" }}>
        {comments.slice(-5).map(c => (
          <div
            key={c.id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              padding: "8px 0",
              fontSize: 12
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                minWidth: 30,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#7c5cfc,#38d9f5)",
                display: "grid",
                placeItems: "center",
                overflow: "hidden",
                fontWeight: 800,
                color: "#fff"
              }}
            >
              {c.userAvatar ? (
                <img
                  src={c.userAvatar}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span>{(c.userName || "U").slice(0,1).toUpperCase()}</span>
              )}
            </div>

            <div style={{ minWidth: 0 }}>
              <div>
                <b>{c.userName}</b>
              </div>
              <div style={{ color: "var(--ct65)", marginTop: 2 }}>
                {c.text}
              </div>
            </div>
          </div>
        ))}
        {user ? <div style={{ display: "flex", gap: 7, marginTop: 6 }}><input value={comment} onChange={e => setComment(e.target.value)} placeholder="Write a comment…" onKeyDown={e => e.key === "Enter" && addComment()} /><button className="btn-white" onClick={addComment} style={{ width: 80, borderRadius: 10 }}>Send</button></div> : <button className="btn-ghost" onClick={onOpenLogin} style={{ width: "100%", borderRadius: 10, padding: 9 }}>Login to comment</button>}
      </div>}
    </div>
  </article>;
}

function CommunityFeed({
  problems,
  user,
  onUpdate,
  onOpenLogin,
  onOpenUserProfile,
  isAdmin = false
}: {
  problems: Problem[];
  user: AppUser | null;
  onUpdate: (id: string, changes: any) => Promise<void> | void;
  onOpenLogin: () => void;
  onOpenUserProfile: (profile: PublicProfileData) => void;
  isAdmin?: boolean;
}) {
  const [queryText, setQueryText] = useState("");
  const posts = problems.filter(p => !queryText || `${p.title} ${p.caption || ""} ${p.name}`.toLowerCase().includes(queryText.toLowerCase()));
  return <div style={{ maxWidth: 620, margin: "0 auto", padding: "28px 0 90px" }}>
                    <div style={{ marginBottom: 24, textAlign: "left" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 20, background: "rgba(124,92,252,0.12)", border: "1px solid rgba(124,92,252,0.25)", fontSize: 11, color: "#b57bee", marginBottom: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}></span>
          Community Voice
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 32, margin: 0, letterSpacing: "-0.02em" }}>
          Village Problems
        </h2>
        <p style={{ color: "var(--ct45)", fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>
          Gaon ki sabhi samasyaein aur community posts yahan dekhein.
        </p>
      </div>
      <input value={queryText} onChange={e => setQueryText(e.target.value)} placeholder="Search posts…" style={{ marginBottom: 16 }} />
    {posts.length === 0 ? <div className="glass" style={{ borderRadius: 18, padding: 50, textAlign: "center" }}>No community posts yet.</div> : posts.map(p => <CommunityPostCard key={p.id} problem={p} user={user} onUpdate={onUpdate} onOpenLogin={onOpenLogin} onOpenUserProfile={onOpenUserProfile} isAdmin={isAdmin} />)}
  </div>;
}


class ProfileErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state: { hasError: boolean; error?: Error } = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("PROFILE RUNTIME ERROR:", error);
    console.error("PROFILE COMPONENT STACK:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif"
        }}>
          <div className="glass" style={{
            maxWidth: 620,
            width: "100%",
            padding: 24,
            borderRadius: 18
          }}>
            <h2 style={{ marginTop: 0 }}>Profile Error</h2>
            <p style={{ color: "var(--ct4)" }}>
              Profile page render karte waqt error aaya:
            </p>
            <pre style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              padding: 14,
              borderRadius: 12,
              background: "var(--bg2, #f3f3f3)",
              overflowX: "auto"
            }}>
              {this.state.error?.message || "Unknown runtime error"}
            </pre>
            <button
              className="btn"
              onClick={() => window.location.reload()}
            >
              Reload Profile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


function UserProfilePage({ user, problems, onUpdate, onDelete, onLogout, onOpenSettings }: { user: AppUser; problems: Problem[]; onUpdate: (id: string, changes: any) => Promise<void>; onDelete: (id: string) => Promise<void>; onLogout: () => void; onOpenSettings: () => void }) {
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCat, setFilterCat] = useState("All");
  const [filterWard, setFilterWard] = useState("All");

  const mine = problems.filter(p => p.authorId === user.id || (p.mobile === user.mobile && p.name === user.name));

  const downloadIdCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1100;
    canvas.height = 640;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const role = String((user as any).role || (user as any).adminRole || (user as any).post || "").toLowerCase();
    const isAdmin = role.includes("super") || role.includes("admin") || role === "administrator";
    const roleLabel = role.includes("super") ? "Super Admin" : role.includes("complaint") ? "Complaint Admin" : role.includes("user-admin") ? "User Admin" : isAdmin ? "Administrator" : String((user as any).post || "Community Member");
    const statusLabel = String((user as any).status || "Active").toUpperCase();
    const memberSince = user.createdAt ? fmtDate(user.createdAt) : "Registered Member";

    // 1. Premium Blue Gradient Background
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (isAdmin) {
      grad.addColorStop(0, "#1e3a8a"); // Darker blue for admin
      grad.addColorStop(1, "#0f172a");
    } else {
      grad.addColorStop(0, "#2563eb"); // Bright modern blue
      grad.addColorStop(1, "#1d4ed8");
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Subtle Glow Accent (Top Right)
    const glow = ctx.createRadialGradient(canvas.width, 0, 0, canvas.width, 0, 600);
    glow.addColorStop(0, "rgba(255,255,255,0.15)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 3. Header Text
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.font = "bold 20px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.fillText((isAdmin ? "ADMIN ID" : "COMMUNITY ID").toUpperCase(), 60, 70);

    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "bold 18px 'Plus Jakarta Sans', Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("GRAM SABHA PAHRAJPUR", canvas.width - 60, 70);
    ctx.textAlign = "left";

    const drawContent = () => {
      // 4. Main Name & Role Subtitle
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 54px 'Plus Jakarta Sans', Arial, sans-serif";
      ctx.fillText(String(user.name || "Community Member"), 350, 190);

      ctx.fillStyle = isAdmin ? "#fcd34d" : "#93c5fd"; // Gold for admin, cyan for user
      ctx.font = "24px 'Plus Jakarta Sans', Arial, sans-serif";
      ctx.fillText(roleLabel, 350, 235);

      // 5. Detailed Info Grid (Purane card jaisi details)
      const details = [
        ["User ID", String(user.id || "-")],
        ["Ward", String(user.ward || "Not specified")],
        ["Mobile No.", String(user.mobile || "-")],
        ["Member Since", memberSince]
      ];

      let startY = 320;
      details.forEach(([label, val]) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.font = "20px 'Plus Jakarta Sans', Arial, sans-serif";
        ctx.fillText(label, 350, startY);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 22px 'Plus Jakarta Sans', Arial, sans-serif";
        ctx.fillText(val, 550, startY);
        startY += 48;
      });

      // 6. Bottom Separator Line
      ctx.beginPath();
      ctx.moveTo(60, 530);
      ctx.lineTo(canvas.width - 60, 530);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 7. Footer Status
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = "18px 'Plus Jakarta Sans', Arial, sans-serif";
      ctx.fillText("STATUS:", 60, 580);

      const isActive = statusLabel === "ACTIVE" || statusLabel === "APPROVED";
      ctx.fillStyle = isActive ? "#4ade80" : "#f87171";
      ctx.font = "bold 18px 'Plus Jakarta Sans', Arial, sans-serif";
      ctx.fillText(statusLabel, 145, 580);

      // 8. Footer Download Text
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.textAlign = "right";
      ctx.fillText("DIGITAL IDENTITY CARD", canvas.width - 60, 580);
      ctx.textAlign = "left";

      // Final Download Trigger
      const link = document.createElement("a");
      const safeName = String(user.name || "user").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
      link.download = `${safeName}-id-card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    // 9. Photo Logic with Rounded Borders
    const photoX = 60, photoY = 130, pSize = 240, radius = 24;
    
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.roundRect(photoX, photoY, pSize, pSize, radius);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.stroke();

    if (user.avatar) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(photoX, photoY, pSize, pSize, radius);
        ctx.clip();
        ctx.drawImage(img, photoX, photoY, pSize, pSize);
        ctx.restore();
        drawContent();
      };
      img.onerror = () => {
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 90px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(user.name || "U").slice(0, 1).toUpperCase(), photoX + pSize / 2, photoY + pSize / 2);
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";
        drawContent();
      };
      img.src = user.avatar;
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 90px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(user.name || "U").slice(0, 1).toUpperCase(), photoX + pSize / 2, photoY + pSize / 2);
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
      drawContent();
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 0" }}>
      <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 20, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", display: "grid", placeItems: "center", fontSize: 28, color: "#fff", fontWeight: 800 }}>
          {user.avatar ? <img src={user.avatar} style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}} alt="Avatar" /> : (user.name || "U").slice(0,1).toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "\"Space Grotesk\", sans-serif", marginBottom: 6 }}>{user.name}</div>
          <div style={{ color: "var(--ct4)", fontSize: 14 }}><Phone size={12} style={{verticalAlign:"middle", marginRight: 4}}/> {user.mobile} <span style={{margin:"0 8px"}}>•</span> <Home size={12} style={{verticalAlign:"middle", marginRight: 4}}/> {user.ward}</div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn-white" onClick={downloadIdCard} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><FileText size={14}/> ID Card</button>
          <button className="btn-ghost" onClick={onOpenSettings} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><Settings size={14}/> Settings</button>
          <button className="btn-danger" onClick={onLogout} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}><LogIn size={14} style={{transform:"rotate(180deg)"}}/> Logout</button>
        </div>
      </div>
                <div className="glass" style={{ borderRadius: 16, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or ID…" style={{ flex: "1 1 180px", minWidth: 140 }} />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priority">By Priority</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mine.length === 0 ? <div style={{ textAlign: "center", color: "var(--ct4)", padding: 30 }}>No issues found.</div> : mine.map(p => (
          <ProblemCard key={p.id} problem={p} isAdmin={false} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

// ── Admin Login ───────────────────────────────────────────────────────────────
type AdminRole = "super" | "user-admin" | "complaint-admin";

function AdminLogin({ superPassword, userAdminPassword, complaintAdminPassword, onLogin }: {
  superPassword: string; userAdminPassword: string; complaintAdminPassword: string;
  onLogin: (role: AdminRole) => void;
}) {
  const ADMIN_ID = "abhinavyadav1405";
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const attempt = () => {
    if (id !== ADMIN_ID) { setErr("Galat Admin ID!"); return; }
    if (pw === superPassword)            { setErr(""); onLogin("super"); return; }
    if (pw === userAdminPassword)        { setErr(""); onLogin("user-admin"); return; }
    if (pw === complaintAdminPassword)   { setErr(""); onLogin("complaint-admin"); return; }
    setErr("Galat Password!");
  };
  return (
    <div style={{ maxWidth: 380, margin: "60px auto" }}>
      <div className="glass" style={{ borderRadius: 22, padding: "32px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}><LockKeyhole size={40} /></div>
                    <p style={{ fontSize: 13, color: "var(--ct4)", marginTop: 8 }}>ID aur Password daalo</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input placeholder="Admin ID" value={id} onChange={e => { setId(e.target.value); setErr(""); }} />
          <input type="password" placeholder="Password" value={pw} onChange={e => { setPw(e.target.value); setErr(""); }} onKeyDown={e => e.key === "Enter" && attempt()} />
          {err && <div style={{ fontSize: 13, color: "#ef4444", textAlign: "center" }}>{err}</div>}
          <button className="btn-white" onClick={attempt} style={{ borderRadius: 12, padding: "12px 0", fontSize: 15, fontWeight: 600 }}>Login →</button>
        </div>
      </div>
    </div>
  );
}

// ── Manage Users (User-Admin panel) ────────────────────────────────────────────
interface BlockedUser { mobile: string; name: string; reason: string; blockedAt: string; }

function ManageUsers({ problems, blockedUsers, onBlock, onUnblock, onDeleteUser, showToast }: {
  problems: Problem[]; blockedUsers: BlockedUser[];
  onBlock: (mobile: string, name: string) => void;
  onUnblock: (mobile: string) => void;
  onDeleteUser: (mobile: string, name: string) => void;
  showToast: (m: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [confirmDel, setConfirmDel] = useState<string | null>(null);

  // Group complaints by mobile number → one row per unique user
  const usersMap: Record<string, { name: string; mobile: string; count: number; lastDate: string }> = {};
  problems.forEach(p => {
    if (!p.mobile) return;
    if (!usersMap[p.mobile]) usersMap[p.mobile] = { name: p.name, mobile: p.mobile, count: 0, lastDate: p.submittedAt };
    usersMap[p.mobile].count += 1;
    if (p.submittedAt > usersMap[p.mobile].lastDate) usersMap[p.mobile].lastDate = p.submittedAt;
  });
  const isBlocked = (mobile: string) => blockedUsers.some(b => b.mobile === mobile);

  let users = Object.values(usersMap);
  if (search.trim()) {
    const s = search.trim().toLowerCase();
    users = users.filter(u => u.name.toLowerCase().includes(s) || u.mobile.includes(s));
  }
  users.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 32 }}>
                <p style={{ fontSize: 13, color: "var(--ct4)", marginBottom: 20 }}>Complaint submit karne wale users ki list. Fake user ko block ya delete karein.</p>

      <input placeholder="Naam ya mobile se search karein…" value={search} onChange={e => setSearch(e.target.value)} style={{ marginBottom: 20 }} />

      {users.length === 0 && <div style={{ color: "var(--ct4)", fontSize: 13 }}>Abhi tak koi user nahi mila.</div>}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {users.map(u => {
          const blocked = isBlocked(u.mobile);
          return (
            <div key={u.mobile} className="glass" style={{ borderRadius: 16, padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{u.name} {blocked && <Badge text="🚫 Blocked" color="#f87171" />}</div>
                <div style={{ fontSize: 12, color: "var(--ct4)", marginTop: 4 }}>📞 {u.mobile} · {u.count} complaint{u.count > 1 ? "s" : ""} · Last: {fmtDate(u.lastDate)}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {blocked ? (
                  <button className="btn-ghost" onClick={() => { onUnblock(u.mobile); showToast(`✅ ${u.name} unblock ho gaya`); }} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 12 }}>Unblock</button>
                ) : (
                  <button className="btn-ghost" onClick={() => { onBlock(u.mobile, u.name); showToast(`🚫 ${u.name} block ho gaya`); }} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 12 }}>Block</button>
                )}
                {confirmDel === u.mobile ? (
                  <>
                    <button className="btn-danger" onClick={() => { onDeleteUser(u.mobile, u.name); setConfirmDel(null); }} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 12 }}>Pakka Delete?</button>
                    <button className="btn-ghost" onClick={() => setConfirmDel(null)} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 12 }}>Cancel</button>
                  </>
                ) : (
                  <button className="btn-danger" onClick={() => setConfirmDel(u.mobile)} style={{ borderRadius: 10, padding: "8px 14px", fontSize: 12 }}>Delete</button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {blockedUsers.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <SectionHead icon="🚫" title="Blocked Numbers" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {blockedUsers.map(b => (
              <div key={b.mobile} className="glass" style={{ borderRadius: 12, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
                <span>{b.name} · 📞 {b.mobile} · {b.reason}</span>
                <button className="btn-ghost" onClick={() => onUnblock(b.mobile)} style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12 }}>Unblock</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Category Grid ─────────────────────────────────────────────────────────────
function CategoryGrid({ problems, onNavigate }: { problems: Problem[]; onNavigate: () => void }) {
  const counts = CATEGORIES.reduce((acc, cat) => { acc[cat] = problems.filter(p => p.category === cat).length; return acc; }, {} as Record<string, number>);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 12 }}>
      {CATEGORIES.map(cat => (
        <div key={cat} className="glass" onClick={onNavigate} style={{ borderRadius: 14, padding: 16, cursor: "pointer", transition: "transform 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: CAT_COLORS[cat] || "#6b7280", marginBottom: 10 }} />
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{cat}</div>
                    <div style={{ fontSize: 11, color: "var(--ct35)", marginTop: 2 }}>{counts[cat]} issues</div>
        </div>
      ))}
    </div>
  );
}

// ── Sarpanch Profile Card ─────────────────────────────────────────────────────
function SarpanchCard({ sarpanchName, photo, whatsapp, instagram, address }: { sarpanchName: string; photo: string; whatsapp: string; instagram: string; address: string }) {
  return (
    <div className="glass" style={{ borderRadius: 22, padding: "20px 22px", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", position: "relative" }}>
        {/* Photo / Avatar */}
        <div style={{ width: 84, height: 84, borderRadius: 20, flexShrink: 0, overflow: "hidden", boxShadow: "0 4px 20px rgba(22,163,74,0.35)", border: "2px solid rgba(34,197,94,0.3)", background: "linear-gradient(135deg,#16a34a,#166534)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {photo
            ? <img src={photo} alt="Sarpanch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontSize: 40 }}></span>}
        </div>
        <div style={{ flex: 1, minWidth: 150 }}>
          <div style={{ fontSize: 10, color: "#22c55e", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 5 }}>GRAM PRADHAN · SARPANCH</div>
                    <div style={{ fontSize: 12, color: "var(--ct4)", lineHeight: 1.5 }}>{address}</div>
        </div>
        {/* Contact Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {whatsapp && (
            <a href={`https://wa.me/91${whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer"
              style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:13,background:"rgba(37,211,102,0.1)",border:"1px solid rgba(37,211,102,0.3)",color:"#25d366",textDecoration:"none",fontWeight:600,fontSize:13 }}>
              💬 WhatsApp
            </a>
          )}
          {instagram && (
            <a href={`https://instagram.com/${instagram.replace("@","")}`} target="_blank" rel="noreferrer"
              style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:13,background:"rgba(225,48,108,0.1)",border:"1px solid rgba(225,48,108,0.3)",color:"#e1306c",textDecoration:"none",fontWeight:600,fontSize:13 }}>
              📸 Instagram
            </a>
          )}
          {!whatsapp && !instagram && (
            <div style={{ fontSize: 12, color: "var(--ct3)", fontStyle: "italic" }}>Add contact links in Settings</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Feedback Section ───────────────────────────────────────────────────────────
function FeedbackSection({ feedbacks, onAdd }: { feedbacks: Feedback[]; onAdd: (f: Feedback) => void }) {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating]   = useState(5);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!name.trim() || !message.trim()) return;
    onAdd({ id: uuid(), name: name.trim(), message: message.trim(), rating, createdAt: new Date().toISOString() });
    setName(""); setMessage(""); setRating(5); setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const recent    = [...feedbacks].sort((a,b) => new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).slice(0,5);
  const avgRating = feedbacks.length ? (feedbacks.reduce((s,f)=>s+f.rating,0)/feedbacks.length).toFixed(1) : null;

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
        <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:600, fontSize:18, color:"var(--text-main)" }}>💬 Public Feedback</h3>
        {avgRating && <div style={{ fontSize:13, color:"#f59e0b", fontWeight:600 }}>⭐ {avgRating} avg · {feedbacks.length} review{feedbacks.length!==1?"s":""}</div>}
      </div>

      <div className="glass" style={{ borderRadius:18, padding:"20px 22px", marginBottom:14 }}>
        <div style={{ fontSize:13, color:"var(--ct45)", marginBottom:14 }}>Rate village works & share your suggestions</div>
        <div style={{ display:"flex", gap:4, marginBottom:14, alignItems:"center" }}>
          {[1,2,3,4,5].map(s => (
            <span key={s} onClick={()=>setRating(s)} onMouseEnter={()=>setHovered(s)} onMouseLeave={()=>setHovered(0)}
              style={{ fontSize:28, cursor:"pointer", filter:s<=(hovered||rating)?"none":"grayscale(1) opacity(0.25)", transition:"all 0.15s" }}>⭐</span>
          ))}
          <span style={{ fontSize:12, color:"rgba(255,255,255,0.38)", marginLeft:10 }}>{["","Poor","Fair","Good","Very Good","Excellent"][hovered||rating]}</span>
        </div>
        <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} maxLength={60} style={{ marginBottom:10 }} />
        <textarea rows={3} placeholder="Your feedback, suggestions or appreciation…" value={message} onChange={e=>setMessage(e.target.value)} maxLength={400} style={{ marginBottom:12 }} />
        {submitted
          ? <div style={{ padding:"11px",borderRadius:10,background:"rgba(34,197,94,0.12)",border:"1px solid rgba(34,197,94,0.25)",color:"#22c55e",fontSize:13,textAlign:"center",fontWeight:600 }}>✅ Thank you for your feedback!</div>
          : <button className="btn-white" onClick={submit} disabled={!name.trim()||!message.trim()} style={{ width:"100%",borderRadius:10,padding:"11px 0",fontSize:14,fontWeight:600 }}>Submit Feedback →</button>}
      </div>

      {recent.length > 0 && (
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {recent.map(f => (
            <div key={f.id} className="glass" style={{ borderRadius:14, padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:32, height:32, borderRadius:10, background:"var(--cbg7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}><User size={28} /></div>
                  <span style={{ fontSize:13, fontWeight:600 }}>{f.name}</span>
                </div>
                <div style={{ display:"flex", gap:1 }}>
                  {Array.from({length:5}).map((_,i)=><Star key={i} size={13} fill={i < f.rating ? "currentColor" : "none"} opacity={i < f.rating ? 1 : 0.2} />)}
                </div>
              </div>
              <p style={{ fontSize:13, color:"var(--ct6)", lineHeight:1.65, margin:0 }}>{f.message}</p>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.22)", marginTop:6 }}>{fmtDate(f.createdAt)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Notices Page ──────────────────────────────────────────────────────────────
const NOTICE_META: Record<string, { color: string; bg: string; icon: string; label: string }> = {
  urgent:  { color: "#ef4444", bg: "rgba(239,68,68,0.12)",   icon: "🚨", label: "Urgent" },
  meeting: { color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  icon: "📅", label: "Meeting" },
  scheme:  { color: "#22c55e", bg: "rgba(34,197,94,0.12)",   icon: "🏛", label: "Scheme" },
  event:   { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  icon: "🎉", label: "Event" },
  general: { color: "#a855f7", bg: "rgba(168,85,247,0.12)",  icon: "📢", label: "General" },
};

function NoticesPage({ notices, isAdmin, onDelete, compact = false, onViewAll }: {
  notices: Notice[]; isAdmin: boolean; onDelete: (id: string) => void;
  compact?: boolean; onViewAll?: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const sorted = [...notices].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const items = compact ? sorted.slice(0, 4) : sorted;

  return (
    <div>
      {compact ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    {onViewAll && <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 10, padding: "6px 14px", fontSize: 13 }}>View All</button>}
        </div>
      ) : (
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", fontSize: 12, color: "#f59e0b", marginBottom: 16, fontWeight: 600 }}>
            📢 Official Notices
          </div>
                    <p style={{ fontSize: 13, color: "var(--ct4)" }}>Official announcements from Sarpanch  — Gram Sabha Pahrajpur</p>
        </div>
      )}

      {notices.length === 0 ? (
        <div className="glass" style={{ borderRadius: 20, padding: compact ? "28px 24px" : "48px 32px", textAlign: "center" }}>
          <div style={{ marginBottom: 12 }}><Clipboard size={40} color="#f59e0b" /></div>
                    <div style={{ color: "var(--ct4)", fontSize: 13 }}>{isAdmin ? "Go to Settings → Notices to post your first announcement." : "Official notices from the Sarpanch will appear here."}</div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map(n => {
            const m = NOTICE_META[n.type];
            const isExp = expanded === n.id;
            return (
              <div key={n.id} className="glass" style={{ borderRadius: 16, padding: "16px 18px", cursor: "pointer", borderLeft: `3px solid ${m.color}`, transition: "all 0.2s" }}
                onClick={() => setExpanded(isExp ? null : n.id)}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: m.color }}><UiIcon name={m.icon} size={17} /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 4 }}>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, padding: "2px 8px", borderRadius: 8, background: m.bg, color: m.color, fontWeight: 600 }}><UiIcon name={m.icon} size={12} />{m.label}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}><CalendarDays size={14} /> {n.date} · Posted {fmtDate(n.createdAt)}</div>
                  </div>
                  <span style={{ color: "var(--ct3)", fontSize: 12, flexShrink: 0, paddingTop: 2 }}>{isExp ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</span>
                </div>
                {isExp && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{n.body}</p>
                    {isAdmin && (
                      <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                        <button className="btn-danger" style={{ borderRadius: 9, padding: "7px 16px", fontSize: 13 }}
                          onClick={e => { e.stopPropagation(); onDelete(n.id); }}><Trash2 size={14} /> Delete</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {compact && notices.length > 4 && onViewAll && (
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <button className="btn-ghost" onClick={onViewAll} style={{ borderRadius: 12, padding: "10px 28px", fontSize: 14 }}>View All {notices.length} Notices →</button>
        </div>
      )}
    </div>
  );
}

// ── Gallery Page ──────────────────────────────────────────────────────────────
function getYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function GalleryPage({ media, isAdmin, onDelete, compact = false, onViewAll }: {
  media: MediaItem[]; isAdmin: boolean; onDelete: (id: string) => void;
  compact?: boolean; onViewAll?: () => void;
}) {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const openPhoto = (item: MediaItem) => { setZoomed(false); setLightbox(item); };
  const closePhoto = () => { setZoomed(false); setLightbox(null); };
  const items = compact ? media.slice(0, 6) : media;
  const photos = items.filter(item => item.type === "photo");
  const activeIndex = lightbox ? photos.findIndex(item => item.id === lightbox.id) : -1;
  const movePhoto = (direction: number) => {
    if (!photos.length || activeIndex < 0) return;
    setLightbox(photos[(activeIndex + direction + photos.length) % photos.length]);
  };

  return (
    <section className={`village-gallery ${compact ? "village-gallery-compact" : ""}`}>
      {lightbox && lightbox.type === "photo" && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={closePhoto}>
          <button className="gallery-lightbox-close" aria-label="Close photo" onClick={closePhoto}>×</button>
          {photos.length > 1 && <button className="gallery-lightbox-nav gallery-lightbox-prev" aria-label="Previous photo" onClick={e => { e.stopPropagation(); movePhoto(-1); }}>‹</button>}
          <div className={`gallery-lightbox-content ${zoomed ? "is-zoomed" : ""}`} onClick={e => e.stopPropagation()}>
            <img className={zoomed ? "is-zoomed" : ""} src={lightbox.url} alt={lightbox.title} onClick={() => setZoomed(value => !value)} />
            <div className="gallery-lightbox-caption">
              <div className="gallery-lightbox-title">{lightbox.title}</div>
              {lightbox.caption && <div>{lightbox.caption}</div>}
              {activeIndex >= 0 && <span>{activeIndex + 1} / {photos.length}</span>}
            </div>
          </div>
          {photos.length > 1 && <button className="gallery-lightbox-nav gallery-lightbox-next" aria-label="Next photo" onClick={e => { e.stopPropagation(); movePhoto(1); }}>›</button>}
        </div>
      )}

      {!compact && (
        <div className="gallery-heading">
          <div className="gallery-eyebrow"><span className="gallery-eyebrow-dot" /> COMMUNITY MOMENTS</div>
          <h2>Village <span>Gallery</span></h2>
          <p>Stories, celebrations, and everyday life in Gram Sabha Pahrajpur.</p>
          <div className="gallery-heading-rule"><span /></div>
        </div>
      )}

      {compact && (
        <div className="gallery-compact-heading">
          <div><span className="gallery-compact-kicker">MEMORIES IN PAHRAJPUR</span><h3>Village Gallery</h3></div>
          {onViewAll && <button className="gallery-view-all" onClick={onViewAll}>Explore all <span>↗</span></button>}
        </div>
      )}

      {media.length === 0 ? (
        <div className="gallery-empty">
          <div className="gallery-empty-icon"><ImageIcon size={30} /></div>
          <h3>Stories will appear here</h3>
          <p>{isAdmin ? "Visit Settings → Gallery to add your first photo or video." : "Village photos and videos will be added here soon."}</p>
        </div>
      ) : (
        <div className={`gallery-grid ${compact ? "gallery-grid-compact" : ""}`}>
          {items.map((item, index) => {
            const ytId = item.type === "video" ? getYoutubeId(item.url) : null;
            return (
              <article key={item.id} className="gallery-card" style={{ animationDelay: `${Math.min(index, 8) * 65}ms` }}>
                <div className="gallery-card-media" onClick={() => item.type === "photo" && openPhoto(item)}>
                  {item.type === "photo" ? (
                    <img className="gallery-card-image" src={item.url} alt={item.title} loading="lazy" />
                  ) : ytId ? (
                    <iframe src={`https://www.youtube.com/embed/${ytId}`} title={item.title} loading="lazy" allowFullScreen />
                  ) : (
                    <div className="gallery-invalid-video">Video link unavailable</div>
                  )}
                  <div className="gallery-card-shade" />
                  <div className="gallery-card-topline">
                    <span className={`gallery-type-pill ${item.type === "video" ? "is-video" : ""}`}>{item.type === "photo" ? "▧ PHOTO" : "▶ VIDEO"}</span>
                    {isAdmin && <button className="gallery-delete" aria-label={`Delete ${item.title}`} onClick={e => { e.stopPropagation(); onDelete(item.id); }}><Trash2 size={15} /></button>}
                  </div>
                  {item.type === "photo" && <div className="gallery-open-hint"><span>↗</span> View photo</div>}
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="gallery-card-copy">
                    <h3 title={item.title}>{item.title}</h3>
                    {item.caption && <p title={item.caption}>{item.caption}</p>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {compact && media.length > 6 && onViewAll && (
        <div className="gallery-bottom-link"><button onClick={onViewAll}>Discover all {media.length} moments <span>→</span></button></div>
      )}
    </section>
  );
}

// ── Achievements Page (Public) ────────────────────────────────────────────────
const ACH_CATEGORIES = ["Road / Path","Water Supply","Electricity","Sanitation","Education","Health","Drainage","Infrastructure","Other"];
const ACH_CAT_ICONS: Record<string,string> = {
  "Road / Path":"🛣","Water Supply":"💧","Electricity":"⚡","Sanitation":"🧹",
  "Education":"📚","Health":"🏥","Drainage":"🌊","Infrastructure":"🏗","Other":"✅",
};
const ACH_CAT_COLORS: Record<string,string> = {
  "Road / Path":"#a855f7","Water Supply":"#3b82f6","Electricity":"#f59e0b","Sanitation":"#10b981",
  "Education":"#ec4899","Health":"#ef4444","Drainage":"#06b6d4","Infrastructure":"#f97316","Other":"#6b7280",
};

function AchievementsPage({ achievements, media, isAdmin, onDelete, onDeleteMedia }: {
  achievements: Achievement[]; media: MediaItem[]; isAdmin: boolean; onDelete: (id: string) => void; onDeleteMedia: (id: string) => void;
}) {
  const [filterCat, setFilterCat] = useState("All");
  const [filterVillage, setFilterVillage] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = achievements.filter(a =>
    (filterCat === "All" || a.category === filterCat) &&
    (filterVillage === "All" || a.village === filterVillage)
  );

  return (
    <div style={{ paddingTop: 32, maxWidth: 800, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", fontSize: 12, color: "#22c55e", marginBottom: 16, fontWeight: 600 }}>
            🏆 Development Works
          </div>
                    <p style={{ fontSize: 13, color: "var(--ct4)" }}>Works and developments completed under the leadership of Sarpanch </p>
        </div>
      </FadeIn>

      {/* Stats strip */}
      <FadeIn delay={80}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          {[
            { label: "Total Works", value: achievements.length, color: "#22c55e" },
            { label: "Villages Covered", value: [...new Set(achievements.map(a => a.village))].length, color: "#3b82f6" },
            { label: "Categories", value: [...new Set(achievements.map(a => a.category))].length, color: "#f59e0b" },
          ].map(s => (
            <div key={s.label} className="glass" style={{ borderRadius: 14, padding: "14px 20px", flex: 1, minWidth: 120 }}>
                        <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={120}>
        <div className="glass" style={{ borderRadius: 14, padding: "14px 16px", marginBottom: 20, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ width: "auto", fontSize: 13, padding: "7px 12px" }}>
            <option value="All">All Categories</option>
            {ACH_CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={filterVillage} onChange={e => setFilterVillage(e.target.value)} style={{ width: "auto", fontSize: 13, padding: "7px 12px" }}>
            <option value="All">All Villages</option>
            {["Chhatarsar","Pahrajpur","Chakjalal","Chakmoti","Chakjiya","Other"].map(w => <option key={w}>{w}</option>)}
          </select>
          <span style={{ fontSize: 12, color: "var(--ct35)", marginLeft: "auto" }}>{filtered.length} work{filtered.length !== 1 ? "s" : ""}</span>
        </div>
      </FadeIn>

      {achievements.length === 0 ? (
        <FadeIn delay={200}>
          <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
            <div style={{ marginBottom: 14 }}><Trophy size={44} color="#22c55e" /></div>
                      <div style={{ color: "var(--ct4)", fontSize: 13 }}>{isAdmin ? "Go to Settings → Achievements to add your first completed work." : "Completed works will be listed here soon."}</div>
          </div>
        </FadeIn>
      ) : filtered.length === 0 ? (
        <FadeIn delay={200}>
          <div className="glass" style={{ borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
            <Search size={32} style={{ marginBottom: 10 }} />
            <div style={{ fontSize: 16, fontWeight: 600 }}>No matching works</div>
            <div style={{ color: "var(--ct4)", fontSize: 13, marginTop: 6 }}>Try adjusting the filters.</div>
          </div>
        </FadeIn>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map((a, i) => {
            const color = ACH_CAT_COLORS[a.category] ?? "#6b7280";
            const icon  = ACH_CAT_ICONS[a.category]  ?? "✅";
            const isExp = expanded === a.id;
            return (
              <FadeIn key={a.id} delay={i * 40}>
                <div className="glass" style={{ borderRadius: 18, padding: "18px 20px", cursor: "pointer", border: `1px solid ${isExp ? color + "55" : "var(--cbg8)"}`, transition: "all 0.25s" }}
                  onClick={() => setExpanded(isExp ? null : a.id)}>
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: color + "22", border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                                  <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: color + "22", color, fontWeight: 600 }}>{a.category}</span>
                        <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 8, background: "rgba(34,197,94,0.12)", color: "#22c55e", fontWeight: 600 }}>✅ Done</span>
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 12, color: "var(--ct4)" }}>
                        <span><MapPin size={13} /> {a.village}</span>
                        <span><CalendarDays size={13} /> {a.date}</span>
                      </div>
                    </div>
                    <div style={{ color: "var(--ct3)", fontSize: 13, flexShrink: 0, paddingTop: 2 }}>{isExp ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</div>
                  </div>

                  {/* Expanded */}
                  {isExp && (
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ fontSize: 13, color: "var(--ct65)", lineHeight: 1.7, marginBottom: a.photo ? 14 : 0 }}>{a.description}</p>
                      {a.photo && (
                        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                          <img src={a.photo} alt={a.title} style={{ width: "100%", maxHeight: 300, objectFit: "cover", display: "block", cursor: "zoom-in" }}
                            onClick={e => { e.stopPropagation(); window.open(a.photo, "_blank"); }} />
                          <div style={{ padding: "6px 12px", fontSize: 11, color: "var(--ct3)", background: "rgba(0,0,0,0.3)" }}><Camera size={13} style={{ verticalAlign: "middle" }} /> Click to open full size</div>
                        </div>
                      )}
                      {isAdmin && (
                        <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
                          <button className="btn-danger" style={{ borderRadius: 9, padding: "7px 16px", fontSize: 13 }}
                            onClick={e => { e.stopPropagation(); onDelete(a.id); }}><Trash2 size={14} /> Delete</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      )}

      {/* Village Gallery is shown directly inside Achievements for visitors */}
      <div style={{ marginTop: 48, paddingTop: 30, borderTop: "1px solid var(--glass-border)" }}>
        <GalleryPage media={media} isAdmin={isAdmin} onDelete={onDeleteMedia} />
      </div>
    </div>
  );
}

// ── Admin Settings Panel ──────────────────────────────────────────────────────
function AdminSettings({ adminDetails, setAdminDetails, problems, achievements, media, notices, feedbacks, adminPassword, userAdminPassword, complaintAdminPassword, villageName, sarpanchName, sarpanchPhoto, sarpanchAddress, whatsapp, instagram, onSavePassword, onSaveUserAdminPassword, onSaveComplaintAdminPassword, onSaveInfo, onSaveSocial, onSaveSarpanchPhoto, onSaveSarpanchAddress, onClearResolved, onClearAll, onAddAchievement, onDeleteAchievement, onAddMedia, onDeleteMedia, onAddNotice, onDeleteNotice, onDeleteFeedback, showToast }: {
  problems: Problem[]; achievements: Achievement[]; media: MediaItem[]; notices: Notice[]; feedbacks: Feedback[]; adminPassword: string; userAdminPassword: string; complaintAdminPassword: string; villageName: string; sarpanchName: string; sarpanchPhoto: string; sarpanchAddress: string; whatsapp: string; instagram: string;
  onSavePassword: (p: string) => void; onSaveUserAdminPassword: (p: string) => void; onSaveComplaintAdminPassword: (p: string) => void; onSaveInfo: (v: string, s: string) => void; onSaveSocial: (w: string, i: string) => void; onSaveSarpanchPhoto: (p: string) => void; onSaveSarpanchAddress: (a: string) => void;
  onClearResolved: () => void; onClearAll: () => void;
  onAddAchievement: (a: Achievement) => void; onDeleteAchievement: (id: string) => void;
  onAddMedia: (m: MediaItem) => void; onDeleteMedia: (id: string) => void;
  onAddNotice: (n: Notice) => void; onDeleteNotice: (id: string) => void;
  onDeleteFeedback: (id: string) => void;
  showToast: (m: string) => void;
}) {
  const [newPw, setNewPw]       = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwErr, setPwErr]       = useState("");
  const [newUserAdminPw, setNewUserAdminPw] = useState("");
  const [newComplaintAdminPw, setNewComplaintAdminPw] = useState("");
  const [village, setVillage]   = useState("");
  const [sarpanch, setSarpanch] = useState("");
  const [addr, setAddr]         = useState("");
  const [confirmClear, setConfirmClear] = useState<"resolved" | "all" | null>(null);
  const [wa, setWa]     = useState(whatsapp);
  const [ig, setIg]     = useState(instagram);
  const [photoPreview, setPhotoPreview] = useState(sarpanchPhoto);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast("⚠️ Photo must be under 2 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const b64 = reader.result as string;
      setPhotoPreview(b64);
      onSaveSarpanchPhoto(b64);
      showToast("✅ Profile photo saved.");
    };
    reader.readAsDataURL(file);
  };

  const blankAch = () => ({ title: "", description: "", category: ACH_CATEGORIES[0], village: "Pahrajpur", date: new Date().toISOString().slice(0,10) });
  const [achForm, setAchForm] = useState(blankAch());
  const [achPhoto, setAchPhoto] = useState<string | undefined>(undefined);
  const [achPhotoLoading, setAchPhotoLoading] = useState(false);
  const setAF = (k: string, v: string) => setAchForm(f => ({ ...f, [k]: v }));

  const handleAchPhoto = async (file: File) => {
    setAchPhotoLoading(true);
    try { setAchPhoto(await compressImage(file)); } catch (_) {}
    setAchPhotoLoading(false);
  };

  // Notices state
  const NOTICE_TYPES = ["urgent","meeting","scheme","event","general"] as const;
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeBody, setNoticeBody]   = useState("");
  const [noticeType, setNoticeType]   = useState<Notice["type"]>("general");
  const [noticeDate, setNoticeDate]   = useState(new Date().toISOString().slice(0,10));

  const submitNotice = () => {
    if (!noticeTitle.trim()) { showToast("⚠️ Title is required."); return; }
    if (!noticeBody.trim())  { showToast("⚠️ Notice content is required."); return; }
    onAddNotice({ id: uuid(), title: noticeTitle.trim(), body: noticeBody.trim(), type: noticeType, date: noticeDate, createdAt: new Date().toISOString() });
    setNoticeTitle(""); setNoticeBody(""); setNoticeType("general"); setNoticeDate(new Date().toISOString().slice(0,10));
    showToast("✅ Notice posted!");
  };

  // Media state
  const [mediaType, setMediaType] = useState<"photo" | "video">("photo");
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaCaption, setMediaCaption] = useState("");
  const [mediaVideoUrl, setMediaVideoUrl] = useState("");
  const [mediaPhotos, setMediaPhotos] = useState<{ name: string; url: string }[]>([]);
  const [mediaPhotoLoading, setMediaPhotoLoading] = useState(false);

  const handleMediaPhotos = async (files: FileList | null) => {
    if (!files?.length) return;
    setMediaPhotoLoading(true);
    try {
      const selected = Array.from(files).filter(file => file.type.startsWith("image/"));
      const compressed = await Promise.all(selected.map(async file => ({ name: file.name, url: await compressImage(file, 400, 0.3) })));
      setMediaPhotos(prev => [...prev, ...compressed]);
      if (compressed.length) showToast("✅ " + compressed.length + " photo(s) ready to add.");
    } catch (_) { showToast("⚠️ One or more photos could not be processed."); }
    finally { setMediaPhotoLoading(false); }
  };

  const submitMedia = () => {
    if (!mediaTitle.trim()) { showToast("⚠️ Title is required."); return; }
    if (mediaType === "photo" && !mediaPhotos.length) { showToast("⚠️ Please select one or more photos."); return; }
    if (mediaType === "video" && !mediaVideoUrl.trim()) { showToast("⚠️ Please enter a YouTube URL."); return; }
    if (mediaType === "video" && !getYoutubeId(mediaVideoUrl)) { showToast("⚠️ Invalid YouTube URL. Use a youtube.com or youtu.be link."); return; }
    if (mediaType === "photo") {
      const createdAt = new Date().toISOString();
      mediaPhotos.forEach((photo, index) => onAddMedia({ id: uuid(), type: "photo", title: mediaPhotos.length > 1 ? (mediaTitle.trim() + " " + (index + 1)) : mediaTitle.trim(), caption: mediaCaption.trim() || undefined, url: photo.url, createdAt }));
      showToast("✅ " + mediaPhotos.length + " photo(s) added to gallery!");
    } else {
      onAddMedia({ id: uuid(), type: "video", title: mediaTitle.trim(), caption: mediaCaption.trim() || undefined, url: mediaVideoUrl.trim(), createdAt: new Date().toISOString() });
      showToast("✅ Video added to gallery!");
    }
    setMediaTitle(""); setMediaCaption(""); setMediaVideoUrl(""); setMediaPhotos([]);
  };

  const savePassword = () => {
    if (newPw.length < 4) { setPwErr("Password must be at least 4 characters."); return; }
    if (newPw !== confirmPw) { setPwErr("Passwords do not match."); return; }
    onSavePassword(newPw);
    setNewPw(""); setConfirmPw(""); setPwErr("");
    showToast("✅ Super admin password updated successfully.");
  };

  const saveUserAdminPw = () => {
    if (newUserAdminPw.length < 4) { showToast("⚠️ Password must be at least 4 characters."); return; }
    onSaveUserAdminPassword(newUserAdminPw);
    setNewUserAdminPw("");
    showToast("✅ User-Admin password updated successfully.");
  };

  const saveComplaintAdminPw = () => {
    if (newComplaintAdminPw.length < 4) { showToast("⚠️ Password must be at least 4 characters."); return; }
    onSaveComplaintAdminPassword(newComplaintAdminPw);
    setNewComplaintAdminPw("");
    showToast("✅ Complaint-Admin password updated successfully.");
  };

  const exportCSV = () => {
    const headers = ["ID","Title","Category","Ward","Priority","Status","Name","Mobile","Date","Description","Admin Notes"];
    const rows = problems.map(p => [
      p.id, `"${p.title}"`, p.category, p.ward, p.priority, p.status,
      p.name, p.mobile, fmtDate(p.submittedAt), `"${p.description}"`, `"${p.adminNotes}"`
    ]);
    const csv = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "gram-sabha-pahrajpur-issues.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast("✅ CSV exported successfully.");
  };

  const card = (children: React.ReactNode) => (
    <div className="glass" style={{ borderRadius: 18, padding: "24px 22px", marginBottom: 16 }}>{children}</div>
  );

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", paddingTop: 32 }}>
      <FadeIn>
        <div style={{ marginBottom: 28 }}>
                    <p style={{ fontSize: 13, color: "var(--ct4)" }}>Full control over the portal — only visible to you.</p>
        </div>
      </FadeIn>

      {/* ── Change Password ── */}
      <FadeIn delay={80}>
        {card(<>
          <SectionHead icon="🔑" title="Manage Admins" />
{/* 🛡️ All 3 Admins Management Section */}
              <div className="glass" style={{ borderRadius: 20, padding: "24px", marginBottom: 24, border: "2px solid rgba(251,191,36,0.5)" }}>
                          <p style={{ fontSize: 13, color: "var(--ct4)", marginBottom: 16 }}>Teeno admins ki details yahan set karein taaki user profile aur home directory mein unka naam, photo aur contact buttons dikhein.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {["super", "userAdmin", "complaintAdmin"].map((key) => {
                    const title = key === "super" ? "👑 Super Admin" : key === "userAdmin" ? "🛡️ User Admin" : "⚖️ Complaint Admin";
                    return (
                      <div key={key} style={{ background: "var(--cbg5)", borderRadius: 14, padding: "14px", border: "1px solid var(--cbg12)", display: "flex", flexDirection: "column", gap: 8 }}>
                        <div style={{ fontWeight: 700, color: "#fbbf24", fontSize: 14 }}>{title}</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 8 }}>
                          <input placeholder="Name" value={adminDetails[key]?.name || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], name: e.target.value}})} />
                          <input placeholder="Phone" value={adminDetails[key]?.phone || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], phone: e.target.value}})} />
                          <input placeholder="Email" value={adminDetails[key]?.email || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], email: e.target.value}})} />
                          <input placeholder="WhatsApp" value={adminDetails[key]?.whatsapp || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], whatsapp: e.target.value}})} />
                          <input placeholder="Instagram" value={adminDetails[key]?.instagram || ""} onChange={e => setAdminDetails({...adminDetails, [key]: {...adminDetails[key], instagram: e.target.value}})} />
                          <label style={{ padding: "8px 12px", borderRadius: 8, background: "var(--cbg5)", border: "1px solid rgba(255,255,255,0.15)", color: "inherit", display: "flex", alignItems: "center", cursor: "pointer", fontSize: 13, gap: 8 }}>
  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: adminDetails[key]?.photo ? "#4ade80" : "inherit", fontWeight: adminDetails[key]?.photo ? 600 : 400 }}>
    {adminDetails[key]?.photo ? "✅ Photo Selected" : "📷 Upload Photo"}
  </span>
  {adminDetails[key]?.photo && (
    <img src={adminDetails[key].photo} alt="preview" style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover" }} />
  )}
  <input type="file" accept="image/*" style={{ display: "none" }} onChange={async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const b64 = await compressImage(file, 200, 0.5);
        setAdminDetails(prev => ({...prev, [key]: {...prev[key], photo: b64}}));
      } catch(err) { console.error(err); }
    }
  }} />
</label>
                        </div>
                      </div>
                    );
                  })}
                  <button className="btn-white" onClick={async () => {
                    await setDoc(doc(db, "settings", "allAdmins"), adminDetails);
                    alert("All 3 Admins saved successfully!");
                  }} style={{ borderRadius: 12, padding: "14px", fontWeight: 700, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                    Save All Admins Info 💾
                  </button>
                </div>
              </div>

              
                            <SectionHead icon="🔑" title="Change Super Admin Password" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="password" placeholder="New password" value={newPw} onChange={e => { setNewPw(e.target.value); setPwErr(""); }} />
            <input type="password" placeholder="Confirm new password" value={confirmPw} onChange={e => { setConfirmPw(e.target.value); setPwErr(""); }} />
            {pwErr && <div style={{ fontSize: 13, color: "#ef4444" }}>{pwErr}</div>}
            <button className="btn-white" onClick={savePassword} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>Update Password →</button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Role Admin Passwords ── */}
      <FadeIn delay={90}>
        {card(<>
          <SectionHead icon="👥" title="User-Admin Password" />
          <p style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 12 }}>Give this password to the person who will block/delete fake users.</p>
          <div style={{ display: "flex", gap: 10 }}>
            <input type="text" placeholder="New User-Admin password" value={newUserAdminPw} onChange={e => setNewUserAdminPw(e.target.value)} />
            <button className="btn-white" onClick={saveUserAdminPw} style={{ borderRadius: 10, padding: "0 18px", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>Save</button>
          </div>
          <div style={{ fontSize: 11, color: "var(--ct35)", marginTop: 8 }}>Current: {userAdminPassword}</div>
        </>)}
      </FadeIn>

      <FadeIn delay={100}>
        {card(<>
          <SectionHead icon="📋" title="Complaint-Admin Password" />
          <p style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 12 }}>Give this password to the person who will filter and delete fake complaints.</p>
          <div style={{ display: "flex", gap: 10 }}>
            <input type="text" placeholder="New Complaint-Admin password" value={newComplaintAdminPw} onChange={e => setNewComplaintAdminPw(e.target.value)} />
            <button className="btn-white" onClick={saveComplaintAdminPw} style={{ borderRadius: 10, padding: "0 18px", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>Save</button>
          </div>
          <div style={{ fontSize: 11, color: "var(--ct35)", marginTop: 8 }}>Current: {complaintAdminPassword}</div>
        </>)}
      </FadeIn>

      {/* ── Village Info ── */}
      <FadeIn delay={160}>
          {card(<>
          <SectionHead icon="🏘" title="Village & Sarpanch Info" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Village Name (Hindi/English)</label>
              <input value={village} onChange={e => setVillage(e.target.value)} placeholder={villageName || "Enter village name"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Sarpanch Name</label>
              <input value={sarpanch} onChange={e => setSarpanch(e.target.value)} placeholder={sarpanchName || "Enter sarpanch name"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Sarpanch Address</label>
              <input value={addr} onChange={e => setAddr(e.target.value)} placeholder={sarpanchAddress || "Enter full address"} />
            </div>
            <button className="btn-white" onClick={() => { onSaveInfo(village, sarpanch); onSaveSarpanchAddress(addr); showToast("✅ Village info updated."); }} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>
              Save Info →
            </button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Sarpanch Photo + Social ── */}
      <FadeIn delay={200}>
        {card(<>
          <SectionHead icon="📱" title="Sarpanch Photo & Contact Links" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 16, lineHeight: 1.6 }}>
            These appear on the home page Sarpanch card. Photo max 2 MB.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Photo upload */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, overflow: "hidden", flexShrink: 0, border: "2px solid rgba(34,197,94,0.3)", background: "linear-gradient(135deg,#16a34a,#166534)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {photoPreview
                  ? <img src={photoPreview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 32 }}>👩</span>}
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500, display: "block", marginBottom: 8 }}>Sarpanch Profile Photo</label>
                <label style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 10, background: "var(--cbg7)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 13, fontWeight: 600, cursor: "pointer", color: "var(--text-main)" }}>
                  📷 Choose Photo
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: "none" }} />
                </label>
                {photoPreview && (
                  <button onClick={() => { setPhotoPreview(""); onSaveSarpanchPhoto(""); showToast("🗑 Photo removed."); }}
                    style={{ marginLeft: 10, fontSize: 12, color: "#f87171", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div style={{ height: 1, background: "var(--cbg6)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>WhatsApp Number (10 digits)</label>
              <input value={wa} onChange={e => setWa(e.target.value)} placeholder="9876543210" maxLength={15} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, color: "var(--ct5)", fontWeight: 500 }}>Instagram Username (without @)</label>
              <input value={ig} onChange={e => setIg(e.target.value)} placeholder="priyanka_sarpanch" maxLength={40} />
            </div>
            <button className="btn-white" onClick={() => { onSaveSocial(wa, ig); showToast("✅ Contact links saved."); }} style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}>
              Save Contact Links →
            </button>
          </div>
        </>)}
      </FadeIn>

      {/* ── Export ── */}
      <FadeIn delay={240}>
        {card(<>
          <SectionHead icon="📊" title="Export Data" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 14, lineHeight: 1.6 }}>
            Download all {problems.length} reported issues as a CSV file. Opens in Excel, Google Sheets, etc.
          </p>
          <button className="btn-ghost" onClick={exportCSV} style={{ borderRadius: 10, padding: "11px 0", width: "100%", fontSize: 14, fontWeight: 600 }}>
            ⬇️ Download CSV ({problems.length} issues)
          </button>
        </>)}
      </FadeIn>

      {/* ── Gallery Manager ── */}
      <FadeIn delay={320}>
        {card(<>
          <SectionHead icon="📷" title="Village Gallery — Photos & Videos" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Select multiple village photos at once or add YouTube videos. Visible to all villagers.
          </p>

          {/* Type toggle */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {(["photo","video"] as const).map(t => (
              <button key={t} onClick={() => setMediaType(t)} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: `1px solid ${mediaType === t ? "rgba(168,85,247,0.5)" : "var(--cb10)"}`, background: mediaType === t ? "rgba(168,85,247,0.15)" : "var(--cbg4)", color: mediaType === t ? "#c084fc" : "var(--ct4)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                {t === "photo" ? "Photo" : "YouTube Video"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 16, background: "rgba(168,85,247,0.05)", borderRadius: 14, border: "1px solid rgba(168,85,247,0.15)", marginBottom: 18 }}>
            <input placeholder="Title *" value={mediaTitle} onChange={e => setMediaTitle(e.target.value)} maxLength={100} />
            <input placeholder="Caption (optional)" value={mediaCaption} onChange={e => setMediaCaption(e.target.value)} maxLength={200} />

            {mediaType === "photo" ? (<>
              <label style={{ cursor: "pointer", border: "1px dashed rgba(168,85,247,0.35)", borderRadius: 10, padding: "10px 14px", textAlign: "center", fontSize: 13, color: "var(--ct4)", background: "rgba(168,85,247,0.04)" }}>
                {mediaPhotoLoading ? "Compressing photos…" : mediaPhotos.length ? "📷 " + mediaPhotos.length + " photo(s) selected — add more" : "📷 Select Multiple Photos"}
                <input type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => { handleMediaPhotos(e.target.files); e.currentTarget.value = ""; }} />
              </label>
              {mediaPhotos.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(90px,1fr))", gap: 8 }}>
                  {mediaPhotos.map((photo, index) => <div key={photo.name + index} style={{ position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={photo.url} alt={photo.name} style={{ width: "100%", height: 90, objectFit: "cover", display: "block" }} />
                    <button aria-label={"Remove " + photo.name} onClick={() => setMediaPhotos(prev => prev.filter((_, i) => i !== index))} style={{ position: "absolute", top: 4, right: 4, background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", borderRadius: 6, padding: "2px 7px", cursor: "pointer", fontSize: 12 }}>✕</button>
                  </div>)}
                </div>
              )}
            </>) : (
              <input placeholder="YouTube URL (e.g. https://youtu.be/xxxxx)" value={mediaVideoUrl} onChange={e => setMediaVideoUrl(e.target.value)} />
            )}

            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }} onClick={submitMedia}>
              Add to Gallery →
            </button>
          </div>

          {/* Existing items list */}
          {media.length === 0 ? (
            <div style={{ textAlign: "center", padding: "16px 0", color: "var(--ct3)", fontSize: 13 }}>No gallery items yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {media.map(m => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {m.type === "photo"
                    ? <img src={m.url} alt={m.title} style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                    : <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}><Video size={20} /></div>}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.title}</div>
                    <div style={{ fontSize: 11, color: "var(--ct35)" }}>{m.type === "photo" ? "Photo" : "Video"} · {fmtDate(m.createdAt)}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteMedia(m.id); showToast("🗑 Removed from gallery."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>


      {/* ── Achievements Manager ── */}
      <FadeIn delay={300}>
        {card(<>
          <SectionHead icon="🏆" title="Achievements & Completed Works" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Add completed development works and achievements visible to all villagers.
          </p>

          {/* Add form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "16px", background: "rgba(34,197,94,0.05)", borderRadius: 14, border: "1px solid rgba(34,197,94,0.15)", marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, marginBottom: 4 }}>+ Add New Achievement</div>
            <input placeholder="Work Title *" value={achForm.title} onChange={e => setAF("title", e.target.value)} maxLength={120} />
            <textarea rows={3} placeholder="Description — what was done, cost, benefit…" value={achForm.description} onChange={e => setAF("description", e.target.value)} maxLength={600} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <select value={achForm.category} onChange={e => setAF("category", e.target.value)}>
                {ACH_CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={achForm.village} onChange={e => setAF("village", e.target.value)}>
                {["Chhatarsar","Pahrajpur","Chakjalal","Chakmoti","Chakjiya","Other"].map(w => <option key={w}>{w}</option>)}
              </select>
              <input type="date" value={achForm.date} onChange={e => setAF("date", e.target.value)} />
            </div>

            {/* Photo upload */}
            <label style={{ cursor: "pointer", border: "1px dashed rgba(34,197,94,0.3)", borderRadius: 10, padding: "10px 14px", textAlign: "center", fontSize: 13, color: "var(--ct4)", background: "rgba(34,197,94,0.03)" }}>
              {achPhotoLoading ? "Compressing…" : achPhoto ? "📷 Photo attached — click to change" : "📷 Add Photo (optional)"}
              <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { if (e.target.files?.[0]) handleAchPhoto(e.target.files[0]); }} />
            </label>
            {achPhoto && (
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src={achPhoto} alt="preview" style={{ width: "100%", maxHeight: 160, objectFit: "cover", display: "block" }} />
                <button onClick={() => setAchPhoto(undefined)} style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.6)", border: "none", color: "#fff", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 12 }}>✕ Remove</button>
              </div>
            )}

            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }}
              onClick={() => {
                if (!achForm.title.trim()) { showToast("⚠️ Title is required."); return; }
                if (!achForm.description.trim()) { showToast("⚠️ Description is required."); return; }
                onAddAchievement({ id: uuid(), ...achForm, photo: achPhoto });
                setAchForm(blankAch()); setAchPhoto(undefined);
                showToast("✅ Achievement added successfully!");
              }}>
              Add Achievement →
            </button>
          </div>

          {/* List */}
          {achievements.length === 0 ? (
            <div style={{ textAlign: "center", padding: "20px 0", color: "var(--ct3)", fontSize: 13 }}>No achievements added yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {achievements.map(a => (
                <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: 30, height: 30, display: "grid", placeItems: "center" }}><UiIcon name={ACH_CAT_ICONS[a.category] ?? "✅"} size={18} /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: "var(--ct35)" }}>{a.category} · {a.village} · {a.date}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteAchievement(a.id); showToast("🗑 Achievement deleted."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Notices Manager ── */}
      <FadeIn delay={360}>
        {card(<>
          <SectionHead icon="📢" title="Notices & Announcements" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 18, lineHeight: 1.6 }}>
            Post official notices visible to all villagers on the home page.
          </p>

          {/* Add form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 16, background: "rgba(245,158,11,0.05)", borderRadius: 14, border: "1px solid rgba(245,158,11,0.2)", marginBottom: 18 }}>
            <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600, marginBottom: 2 }}>+ Post New Notice</div>

            {/* Type selector */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {NOTICE_TYPES.map(t => {
                const m = NOTICE_META[t];
                return (
                  <button key={t} onClick={() => setNoticeType(t)} style={{ padding: "6px 12px", borderRadius: 9, border: `1px solid ${noticeType === t ? m.color + "88" : "var(--cb10)"}`, background: noticeType === t ? m.bg : "rgba(255,255,255,0.03)", color: noticeType === t ? m.color : "rgba(255,255,255,0.38)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    <UiIcon name={m.icon} size={12} /> {m.label}
                  </button>
                );
              })}
            </div>

            <input placeholder="Notice Title *" value={noticeTitle} onChange={e => setNoticeTitle(e.target.value)} maxLength={120} />
            <textarea rows={4} placeholder="Full notice / announcement text…" value={noticeBody} onChange={e => setNoticeBody(e.target.value)} maxLength={800} />
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 11, color: "var(--ct4)", marginBottom: 4, display: "block" }}>Notice Date</label>
                <input type="date" value={noticeDate} onChange={e => setNoticeDate(e.target.value)} />
              </div>
            </div>
            <button className="btn-white" style={{ borderRadius: 10, padding: "11px 0", fontSize: 14, fontWeight: 600 }} onClick={submitNotice}>
              Post Notice →
            </button>
          </div>

          {/* List */}
          {notices.length === 0 ? (
            <div style={{ textAlign: "center", padding: "16px 0", color: "var(--ct3)", fontSize: 13 }}>No notices posted yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[...notices].sort((a,b) => new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).map(n => {
                const m = NOTICE_META[n.type];
                return (
                  <div key={n.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${m.color}` }}>
                    <span style={{ fontSize: 18, display: "inline-flex" }}><UiIcon name={m.icon} size={18} /></span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{n.title}</div>
                      <div style={{ fontSize: 11, color: "var(--ct35)" }}>{m.label} · {n.date}</div>
                    </div>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "5px 12px", fontSize: 12, flexShrink: 0 }} onClick={() => { onDeleteNotice(n.id); showToast("🗑 Notice deleted."); }}>Delete</button>
                  </div>
                );
              })}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Feedback Manager ── */}
      <FadeIn delay={440}>
        {card(<>
          <SectionHead icon="💬" title="Public Feedback" />
          <p style={{ fontSize: 13, color: "var(--ct45)", marginBottom: 14, lineHeight: 1.6 }}>
            {feedbacks.length} feedback{feedbacks.length!==1?"s":""} received from villagers.
          </p>
          {feedbacks.length === 0 ? (
            <div style={{ textAlign: "center", padding: "14px 0", color: "var(--ct3)", fontSize: 13 }}>No feedback yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 320, overflowY: "auto" }}>
              {[...feedbacks].sort((a,b)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime()).map(f => (
                <div key={f.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"11px 14px", borderRadius:12, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:600, display:"flex", alignItems:"center", gap:8 }}>
                      {f.name}
                      <span style={{ fontSize:12 }}>{Array.from({length:f.rating}).map((_,i)=><Star key={i} size={13} fill="currentColor" />)}</span>
                    </div>
                    <div style={{ fontSize:12, color:"var(--ct45)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.message}</div>
                    <div style={{ fontSize:11, color:"var(--cb25)", marginTop:2 }}>{fmtDate(f.createdAt)}</div>
                  </div>
                  <button className="btn-danger" style={{ borderRadius:8, padding:"5px 12px", fontSize:12, flexShrink:0 }} onClick={() => { onDeleteFeedback(f.id); showToast("🗑 Feedback removed."); }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </>)}
      </FadeIn>

      {/* ── Danger Zone ── */}
      <FadeIn delay={500}>
        {card(<>
          <SectionHead icon="⚠️" title="Danger Zone" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 12, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Delete Resolved Issues</div>
                <div style={{ fontSize: 12, color: "var(--ct4)", marginTop: 3 }}>{problems.filter(p => p.status === "Resolved").length} resolved issues will be removed</div>
              </div>
              {confirmClear === "resolved"
                ? <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => { onClearResolved(); setConfirmClear(null); }}>Confirm</button>
                    <button className="btn-ghost" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear(null)}>Cancel</button>
                  </div>
                : <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear("resolved")}>Delete</button>}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 12, background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Clear ALL Issues</div>
                <div style={{ fontSize: 12, color: "var(--ct4)", marginTop: 3 }}>Permanently delete all {problems.length} issues</div>
              </div>
              {confirmClear === "all"
                ? <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => { onClearAll(); setConfirmClear(null); }}>Confirm</button>
                    <button className="btn-ghost" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear(null)}>Cancel</button>
                  </div>
                : <button className="btn-danger" style={{ borderRadius: 8, padding: "7px 14px", fontSize: 13 }} onClick={() => setConfirmClear("all")}>Clear All</button>}
            </div>
          </div>
        </>)}
      </FadeIn>
    </div>
  );
}


// ── Enhanced Floating Action Button with Voice & Photo ─────────────────────
function EnhancedFAB({
  onOpenSubmit, isOpen, onOpenBoard, onOpenNotices,
}: {
  onOpenSubmit: (transcript?: string) => void;
  isOpen: boolean;
  onOpenBoard: () => void;
  onOpenNotices: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState("");
  const recognitionRef = useRef<any>(null);

  const startVoiceInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice Report is not supported by this browser. Please use the latest Google Chrome.");
      return;
    }
    if (isListening) {
      try { recognitionRef.current?.stop(); } catch {}
      return;
    }

    let finalTranscript = "";
    let gotSpeechResult = false;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "hi-IN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 3;

    recognition.onstart = () => {
      setVoiceText("");
      setIsListening(true);
    };
    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      for (let i = event.resultIndex || 0; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result?.[0]?.transcript || "";
        if (!text) continue;
        gotSpeechResult = true;
        if (result.isFinal) finalTranscript += (finalTranscript ? " " : "") + text;
        else interimTranscript += text;
      }
      const combined = [finalTranscript, interimTranscript].filter(Boolean).join(" ").trim();
      if (combined) setVoiceText(combined);
    };
    recognition.onerror = (event: any) => {
      setIsListening(false);
      const messages: Record<string, string> = {
        "not-allowed": "Microphone permission is blocked. Allow it in Android Settings and Chrome Site settings.",
        "service-not-allowed": "The browser's speech recognition service is blocked.",
        "no-speech": "No speech was detected. Tap Voice Report and speak clearly after the microphone starts.",
        "network": "Speech recognition network error. Check your internet connection and try again.",
        "audio-capture": "The microphone is unavailable. Check microphone permission and close other apps using it.",
        "language-not-supported": "Hindi recognition is unavailable in this browser. Try Chrome with internet access."
      };
      alert("Voice Report: " + (messages[event.error] || ("Speech recognition failed: " + (event.error || "unknown error"))));
    };
    recognition.onend = () => {
      setIsListening(false);
      const transcript = finalTranscript.trim() || (gotSpeechResult ? voiceText.trim() : "");
      if (transcript) {
        setVoiceText(transcript);
        onOpenSubmit(transcript);
      } else {
        alert("No words were recognized. Check internet access, then tap Voice Report and speak clearly in Hindi.");
      }
    };
    try {
      recognition.start();
    } catch {
      setIsListening(false);
      alert("Voice Report could not start. Please try again and ensure no other app is using the microphone.");
    }
  };

  const handleAction = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  return (
    <>
      {/* Backdrop dim when open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 9990, backdropFilter: "blur(2px)" }}
        />
      )}
      <div style={{ position: "fixed", bottom: 90, right: 20, zIndex: 9999 }}>

      <style>{`
        .lg-btn {
          position: relative;
          border-radius: 50%;
          background:
            linear-gradient(155deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.1) 100%),
            rgba(10,18,14,0.55);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: 0 1px 1px rgba(255,255,255,0.35) inset, 0 -6px 12px rgba(255,255,255,0.05) inset, 0 12px 28px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; user-select: none;
        }
        .lg-btn::before {
          content: ''; position: absolute; top: 6%; left: 12%; width: 50%; height: 35%;
          border-radius: 50%; background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
          pointer-events: none; opacity: 0.8;
        }
        .lg-btn svg { display: block; flex-shrink: 0; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.35)); }
        .lg-action {
          width: 52px; height: 52px; color: rgba(255,255,255,0.92);
          opacity: 0; transform: translateY(16px) scale(0.5); pointer-events: none;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .lg-zone-open .lg-action { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        .lg-zone-open .lg-action:nth-child(1) { transition-delay: 0.21s; }
        .lg-zone-open .lg-action:nth-child(2) { transition-delay: 0.16s; }
        .lg-zone-open .lg-action:nth-child(3) { transition-delay: 0.11s; }
        .lg-zone-open .lg-action:nth-child(4) { transition-delay: 0.06s; }
        .lg-zone-open .lg-action:nth-child(5) { transition-delay: 0.01s; }
        .lg-action:active { transform: scale(0.88) !important; }
        .lg-label {
          position: absolute; right: 64px; top: 50%; transform: translateY(-50%);
          background: rgba(20,28,22,0.92); color: #fff; font-size: 12.5px; font-weight: 500;
          padding: 7px 12px; border-radius: 8px; white-space: nowrap;
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .lg-zone-open .lg-action .lg-label { opacity: 1; }
        .lg-zone-open .lg-action:nth-child(1) .lg-label { transition-delay: 0.43s; }
        .lg-zone-open .lg-action:nth-child(2) .lg-label { transition-delay: 0.38s; }
        .lg-zone-open .lg-action:nth-child(3) .lg-label { transition-delay: 0.33s; }
        .lg-zone-open .lg-action:nth-child(4) .lg-label { transition-delay: 0.28s; }
        .lg-zone-open .lg-action:nth-child(5) .lg-label { transition-delay: 0.23s; }
        .lg-main {
          width: 64px; height: 64px; color: #fff;
          background: linear-gradient(155deg, #15803d 0%, #052e16 75%) !important;
          border: 1px solid rgba(255,255,255,0.28) !important;
          box-shadow: 0 1px 1px rgba(255,255,255,0.25) inset, 0 12px 28px rgba(0,0,0,0.5), 0 2px 8px rgba(5,46,22,0.55) !important;
          transition: transform 0.3s, background 0.3s, border-color 0.3s;
        }
        .lg-main:active { transform: scale(0.92); }
        .lg-main-icon {
          display:flex; align-items:center; justify-content:center;
          transition: transform 0.45s cubic-bezier(0.65,0,0.35,1);
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
        }
        .lg-zone-open .lg-main { background: linear-gradient(155deg, #dc2626 0%, #450a0a 75%) !important; border-color: rgba(255,255,255,0.3) !important; }
        .lg-zone-open .lg-main .lg-main-icon { transform: rotate(45deg); }
        .lg-main::after {
          content: ''; position: absolute; inset: -6px; border-radius: 50%;
          border: 1.5px solid rgba(34,197,94,0.35); animation: lgPulse 2.6s ease-out infinite;
        }
        .lg-zone-open .lg-main::after { animation: none; opacity: 0; }
        @keyframes lgPulse { 0% { transform: scale(1); opacity: .6; } 70% { transform: scale(1.35); opacity: 0; } 100% { transform: scale(1.35); opacity: 0; } }
        .lg-mic { width: 52px; height: 52px; }
        .lg-mic.listening { background: linear-gradient(155deg, rgba(248,113,113,0.4) 0%, rgba(255,255,255,0.06) 60%); border-color: rgba(248,113,113,0.5); animation: lgListenPulse 1s infinite; }
        @keyframes lgListenPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(248,113,113,0.5); } 50% { box-shadow: 0 0 0 10px rgba(248,113,113,0); } }
        @media (prefers-reduced-motion: reduce) { .lg-action, .lg-main, .lg-main-icon, .lg-mic { transition: none !important; animation: none !important; } }
      `}</style>

      <div className={menuOpen ? "lg-zone-open" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>

        {/* Notices */}
        <div className="lg-btn lg-action" onClick={handleAction(onOpenNotices)} title="Notices">
          <span className="lg-label">Notices</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
        </div>

        {/* Board */}
        <div className="lg-btn lg-action" onClick={handleAction(onOpenBoard)} title="All Issues">
          <span className="lg-label">All Issues</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
        </div>

        {/* Voice */}
        <div
          className={`lg-btn lg-action lg-mic ${isListening ? "listening" : ""}`}
          onClick={startVoiceInput}
          title={isListening ? "Listening..." : "Report with voice"}
        >
          <span className="lg-label">{isListening ? "Listening…" : "Voice Report"}</span>
          {isListening ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
          )}
        </div>

        {/* Submit / Report */}
        <div className="lg-btn lg-action" onClick={(e) => { handleAction(onOpenSubmit)(e); setMenuOpen(false); }} title="Report a Problem">
          <span className="lg-label">Report Problem</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
        </div>

        {/* Main toggle */}
        <div className="lg-btn lg-main" onClick={() => setMenuOpen(m => !m)}>
          <span className="lg-main-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                </span>
        </div>
      </div>
    </div>
    </>
  );
}

// ── Photo Carousel ───────────────────────────────────────────────────────────
function PhotoCarousel({ media }: { media: any[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (media.length === 0) return;
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % media.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, [media.length]);

  if (!media || media.length === 0) return (
    <div style={{ marginTop: 32, marginBottom: 8 }}>
                <div style={{ borderRadius: 16, background: "var(--cbg5)", height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "var(--ct4)", fontSize: 13 }}>No photos uploaded yet</p>
      </div>
    </div>
  );

  const idx1 = current % media.length;
  const idx2 = (current + 1) % media.length;

  return (
    <div style={{ marginTop: 32, marginBottom: 8 }}>
                <div style={{ 
        display: "flex", gap: 10, perspective: "1000px",
        transform: animating ? "rotateY(90deg)" : "rotateY(0deg)",
        transition: "transform 0.4s ease",
      }}>
        {[idx1, idx2].map((idx, pos) => (
          <div key={idx} style={{
            flex: 1, borderRadius: 12, overflow: "hidden",
            aspectRatio: "3/2",
            maxHeight: 140,
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            transform: animating 
              ? pos === 0 ? "rotateY(-90deg) scale(0.85)" : "rotateY(90deg) scale(0.85)"
              : "rotateY(0deg) scale(1)",
            transition: `transform 0.4s ease ${pos * 0.05}s`,
          }}>
            <img
              src={media[idx]?.url}
              alt={media[idx]?.caption || ""}
              style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "auto" }}
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
        {media.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 20 : 7, height: 7,
            borderRadius: 4, background: i === current ? "var(--text-main)" : "var(--cb20)",
            cursor: "pointer", transition: "all 0.3s"
          }} />
        ))}
      </div>
    </div>
  );
}

const saveSettings = async (data) => {
    try {
      await setDoc(doc(db, "settings", "main"), data, { merge: true });
    } catch(e) { console.log(e); }
  };


// ── Welcome Splash ──────────────────────────────────────────────────────────
const SPLASH_STYLE = `
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes glowPulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.9;transform:scale(1.08)} }
  @keyframes particleDrift { 0%,100%{transform:translateY(0) scale(1);opacity:0.5} 50%{transform:translateY(-28px) scale(1.3);opacity:1} }
  @keyframes borderRotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes splashExit { from{opacity:1;transform:scale(1)} to{opacity:0;transform:scale(1.04)} }
  .splash-shimmer { background:linear-gradient(90deg,#fff 0%,#a3f0c0 20%,#fff 40%,#d4af37 60%,#fff 80%,#a3f0c0 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite; }
  .splash-exit { animation:splashExit 0.7s ease forwards; }
`;

function WelcomeSplash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 2200);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      role="status"
      aria-label="Loading Gram Sabha Pahrajpur"
      style={{
        position: "fixed", inset: 0, zIndex: 999999,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 24, background: "linear-gradient(145deg, #f8f7ff 0%, #edf8ff 52%, #f4fff6 100%)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes gspLogoFloat { 0%,100% { transform: translateY(0) scale(1) rotate(0deg); } 50% { transform: translateY(-9px) scale(1.045) rotate(2deg); } }
        @keyframes gspRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes gspLogoAura { 0%,100% { box-shadow: 0 16px 42px rgba(37,99,235,.13), 0 0 0 0 rgba(22,163,74,.12); } 50% { box-shadow: 0 20px 55px rgba(37,99,235,.22), 0 0 0 12px rgba(22,163,74,0); } }
        @keyframes gspLogoReveal { from { opacity: 0; transform: scale(.78) rotate(-8deg); } to { opacity: 1; transform: scale(1) rotate(0); } }
        @keyframes gspLoad { 0% { transform: translateX(-110%); } 100% { transform: translateX(240%); } }
        @media (prefers-reduced-motion: reduce) { .gsp-loader-motion { animation: none !important; } }
      `}</style>
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,.12), rgba(34,197,94,.04) 55%, transparent 72%)" }} />
      <div style={{ position: "relative", width: 174, height: 174, display: "grid", placeItems: "center" }}>
        <div className="gsp-loader-motion" style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "3px solid transparent", borderTopColor: "#2563eb", borderRightColor: "#f59e0b",
          borderBottomColor: "#16a34a", animation: "gspRing 2s linear infinite",
          filter: "drop-shadow(0 3px 8px rgba(37,99,235,.18))",
        }} />
        <div className="gsp-loader-motion" style={{
          width: 142, height: 142, borderRadius: 30, background: "rgba(255,255,255,.88)",
          border: "1px solid rgba(99,102,241,.12)", boxShadow: "0 16px 42px rgba(67,56,202,.12)",
          display: "grid", placeItems: "center", animation: "gspLogoFloat 1.8s ease-in-out infinite, gspLogoAura 2.4s ease-in-out infinite",
        }}>
          <img src="/logo.svg" alt="Gram Sabha Pahrajpur logo" style={{ width: 124, height: 124, objectFit: "contain", animation: "gspLogoReveal .75s cubic-bezier(.2,.8,.2,1) both" }} />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "0 24px", position: "relative" }}>
        <div style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(20px, 5vw, 27px)", fontWeight: 800, letterSpacing: "-.03em", color: "#211b4b" }}>Gram Sabha Pahrajpur</div>
        <div style={{ marginTop: 8, fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 600, color: "#6b7280", letterSpacing: ".08em" }}>YOUR VILLAGE · YOUR VOICE</div>
      </div>
      <div style={{ width: 150, height: 4, borderRadius: 99, background: "rgba(99,102,241,.13)", overflow: "hidden" }}>
        <div className="gsp-loader-motion" style={{ height: "100%", width: "42%", borderRadius: 99, background: "linear-gradient(90deg,#2563eb,#16a34a,#f59e0b)", animation: "gspLoad .95s ease-in-out infinite alternate" }} />
      </div>
      <div style={{ fontSize: 12, color: "#8b8ba7", fontFamily: "DM Sans, sans-serif" }}>Loading portal…</div>
    </div>
  );
}

// ── User & Post Search ───────────────────────────────────────────────────────
function UserSearchPage({
  users,
  problems,
  onOpenPost
}: {
  users: AppUser[];
  problems: Problem[];
  onOpenPost: (user: AppUser | null, post?: Problem) => void;
}) {
  const [term, setTerm] = useState("");
  const [mode, setMode] = useState<"users" | "posts">("users");
  const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);

  const q = term.trim().toLowerCase();

  const matchedUsers = users
    .filter(u => {
      if (!q) return true;
      return (
        u.name?.toLowerCase().includes(q) ||
        u.id?.toLowerCase().includes(q) ||
        u.ward?.toLowerCase().includes(q)
      );
    })
    .slice(0, 30);

  const matchedPosts = problems
    .filter(p => {
      const text = [
        p.title,
        p.caption || "",
        p.description,
        p.name,
        p.ward,
        p.category
      ].join(" ").toLowerCase();

      if (selectedUser) {
        return (
          p.authorId === selectedUser.id ||
          (p.name === selectedUser.name && p.mobile === selectedUser.mobile)
        );
      }

      return !q || text.includes(q);
    })
    .slice(0, 50);

  const avatar = (u: AppUser | null, size = 48) => (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg,#7c5cfc,#38d9f5)",
        color: "#fff",
        fontWeight: 800,
        fontSize: Math.max(13, size * 0.36),
        border: "2px solid rgba(124,92,252,.18)"
      }}
    >
      {u?.avatar ? (
        <img
          src={u.avatar}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        (u?.name || "U")
          .split(" ")
          .map(x => x[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      )}
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 620,
        margin: "0 auto",
        padding: "24px 0 100px"
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: ".12em",
            color: "#8b5cf6",
            fontWeight: 800
          }}
        >
          DISCOVER
        </div>

        <h2
          style={{
                      fontSize: 28,
            margin: "4px 0 6px"
          }}
        >
          Search
        </h2>

        <div style={{ color: "var(--ct4)", fontSize: 13 }}>
          Villagers aur community posts search karein.
        </div>
      </div>

      <div
        className="glass"
        style={{
          padding: 10,
          borderRadius: 18,
          marginBottom: 14
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9
          }}
        >
          <span style={{ fontSize: 20, opacity: .7 }}>⌕</span>

          <input
            value={term}
            onChange={e => {
              setTerm(e.target.value);
              setSelectedUser(null);
            }}
            placeholder="Search user, post, ward..."
            style={{
              border: 0,
              boxShadow: "none",
              background: "transparent",
              padding: "9px 4px",
              margin: 0
            }}
            autoFocus
          />

          {term && (
            <button
              type="button"
              onClick={() => {
                setTerm("");
                setSelectedUser(null);
              }}
              style={{
                border: 0,
                background: "transparent",
                color: "var(--ct4)",
                fontSize: 18,
                cursor: "pointer"
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 16
        }}
      >
        <button
          type="button"
          onClick={() => {
            setMode("users");
            setSelectedUser(null);
          }}
          style={{
            padding: "10px 12px",
            borderRadius: 12,
            border: mode === "users"
              ? "1px solid rgba(124,92,252,.45)"
              : "1px solid var(--glass-border)",
            background: mode === "users"
              ? "rgba(124,92,252,.12)"
              : "var(--cbg5)",
            color: "var(--text-main)",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          👤 People
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("posts");
            setSelectedUser(null);
          }}
          style={{
            padding: "10px 12px",
            borderRadius: 12,
            border: mode === "posts"
              ? "1px solid rgba(124,92,252,.45)"
              : "1px solid var(--glass-border)",
            background: mode === "posts"
              ? "rgba(124,92,252,.12)"
              : "var(--cbg5)",
            color: "var(--text-main)",
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          📝 Posts
        </button>
      </div>

      {selectedUser && (
        <div
          className="glass"
          style={{
            padding: 12,
            borderRadius: 16,
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 11
          }}
        >
          {avatar(selectedUser, 42)}

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 13 }}>
              {selectedUser.name}
            </div>
            <div style={{ fontSize: 11, color: "var(--ct4)" }}>
              {selectedUser.ward || "Village"} · User posts
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedUser(null)}
            className="btn-ghost"
            style={{
              borderRadius: 9,
              padding: "6px 10px",
              fontSize: 11
            }}
          >
            Clear
          </button>
        </div>
      )}

      {mode === "users" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {matchedUsers.length === 0 ? (
            <div
              className="glass"
              style={{
                borderRadius: 18,
                padding: 42,
                textAlign: "center",
                color: "var(--ct4)"
              }}
            >
              <div style={{ marginBottom: 8 }}><Search size={32} color="#8b5cf6" /></div>
              No users found.
            </div>
          ) : (
            matchedUsers.map(u => (
              <button
                key={u.id}
                type="button"
                onClick={() => {
                  setSelectedUser(u);
                  setMode("posts");
                  setTerm(u.name);
                  onOpenPost(u);
                }}
                className="glass"
                style={{
                  width: "100%",
                  borderRadius: 16,
                  padding: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "left",
                  color: "var(--text-main)",
                  cursor: "pointer",
                  border: "1px solid var(--glass-border)"
                }}
              >
                {avatar(u, 46)}

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>
                    {u.name}
                  </div>
                  <div
                    style={{
                      color: "var(--ct4)",
                      fontSize: 11,
                      marginTop: 3
                    }}
                  >
                    {u.ward || "Village"} · @{u.id}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: 18,
                    color: "var(--ct4)"
                  }}
                >
                  ›
                </span>
              </button>
            ))
          )}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {matchedPosts.length === 0 ? (
            <div
              className="glass"
              style={{
                borderRadius: 18,
                padding: 42,
                textAlign: "center",
                color: "var(--ct4)"
              }}
            >
              <div style={{ marginBottom: 8 }}><FileText size={32} color="#38d9f5" /></div>
              No posts found.
            </div>
          ) : (
            matchedPosts.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => onOpenPost(null, p)}
                className="glass"
                style={{
                  width: "100%",
                  borderRadius: 16,
                  padding: 14,
                  textAlign: "left",
                  color: "var(--text-main)",
                  cursor: "pointer",
                  border: "1px solid var(--glass-border)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      minWidth: 34,
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg,#7c5cfc,#38d9f5)",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 12
                    }}
                  >
                    {(p.name || "U").slice(0, 1).toUpperCase()}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 12 }}>
                      {p.name}
                    </div>
                    <div style={{ color: "var(--ct4)", fontSize: 10 }}>
                      {p.ward} · {p.category}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    marginBottom: 5
                  }}
                >
                  {p.title || "Community Post"}
                </div>

                <div
                  style={{
                    color: "var(--ct45)",
                    fontSize: 12,
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {p.caption || p.description || "No description"}
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}


function UserSettingsPage({ user, onSave, onBack }: { user: any; onSave: (u: any) => Promise<void>; onBack: () => void }) {
  const [name, setName] = useState(user.name || "");
  const [ward, setWard] = useState(user.ward || "Other");
  const [avatar, setAvatar] = useState(user.avatar || "");
  const [loading, setLoading] = useState(false);

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button className="btn-ghost" onClick={onBack} style={{ borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
          <span>←</span> Back
        </button>
                </div>
      <div className="glass" style={{ borderRadius: 20, padding: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#7c5cfc,#38d9f5)", overflow: "hidden", display: "grid", placeItems: "center", color: "#fff", fontSize: 24, fontWeight: 800 }}>
              {avatar ? <img src={avatar} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (name || "U").slice(0,1).toUpperCase()}
            </div>
            <label style={{ cursor: "pointer", background: "var(--btn-ghost-bg)", border: "1px solid var(--btn-ghost-border)", padding: "10px 16px", borderRadius: 12, fontSize: 13, fontWeight: 600, color: "var(--text-main)" }}>
              📷 Change Photo
              <input type="file" accept="image/*" onChange={handlePhoto} style={{ display: "none" }} />
            </label>
            {avatar && (
              <button onClick={() => setAvatar("")} style={{ background: "none", border: "none", color: "#f87171", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Remove</button>
            )}
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 6, display: "block" }}>Full Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div>
            <label style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 6, display: "block" }}>Ward / Location</label>
            <select value={ward} onChange={e => setWard(e.target.value)}>
              {["Chhatarsar", "Pahrajpur", "Chakjalal", "Chakmoti", "Chakjiya", "Other"].map(w => <option key={w}>{w}</option>)}
            </select>
          </div>
          <button className="btn-white" disabled={loading} onClick={async () => { 
            setLoading(true); 
            await onSave({...user, name, ward, avatar}); 
            setLoading(false); 
            onBack(); 
          }} style={{ borderRadius: 12, padding: "14px", marginTop: 10, fontSize: 15, fontWeight: 700 }}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}


function FilterBar(props: any) { return <div className="glass" style={{ borderRadius: 16, padding: "16px 20px", marginBottom: 20 }}><div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}><input value={props.search} onChange={e => props.setSearch(e.target.value)} placeholder="Search issues..." style={{ flex: "1 1 180px", minWidth: 140 }} /><select value={props.filterStatus} onChange={e => props.setFilterStatus(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}><option value="All">All Status</option><option value="Pending">Pending</option><option value="In Progress">In Progress</option><option value="Resolved">Resolved</option></select><select value={props.sort} onChange={e => props.setSort(e.target.value)} style={{ flex: "1 1 120px", minWidth: 100 }}><option value="newest">Newest First</option><option value="oldest">Oldest First</option><option value="priority">By Priority</option></select></div></div>; }

export default function App() {
  useEffect(() => {
    let active = true;
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        if (active) {
          localStorage.removeItem("gsp-user");
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("adminRole");
          setCurrentUser(null);
          setIsAdmin(false);
          setAdminRole(null);
        }
        return;
      }
      try {
        const token = await firebaseUser.getIdTokenResult();
        if (!active) return;
        const firebaseUserId = String(token.claims.gspUserId || "");
        if (!firebaseUserId) {
          localStorage.removeItem("gsp-user");
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("adminRole");
          setCurrentUser(null);
          setIsAdmin(false);
          setAdminRole(null);
          return;
        }
        const stored = localStorage.getItem("gsp-user");
        const profile = stored ? JSON.parse(stored) as AppUser : null;
        if (profile && profile.id === firebaseUserId) {
          setCurrentUser(profile);
        } else {
          localStorage.removeItem("gsp-user");
          setCurrentUser(null);
        }
        const hasAdminClaim = token.claims.admin === true;
        const claimedRole = String(token.claims.adminRole || "");
        const validRole: AdminRole | null = hasAdminClaim && ["super", "user-admin", "complaint-admin"].includes(claimedRole)
          ? claimedRole as AdminRole : null;
        setIsAdmin(hasAdminClaim && validRole !== null);
        setAdminRole(validRole);
        if (validRole) localStorage.setItem("adminRole", validRole);
        else localStorage.removeItem("adminRole");
        if (hasAdminClaim && !validRole) console.error("Admin claim is missing a valid adminRole; provision the role using set-admin-claim.js.");
      } catch (error) {
        console.error("Firebase session verification failed", error);
        if (active) {
          localStorage.removeItem("gsp-user");
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("adminRole");
          setCurrentUser(null);
          setIsAdmin(false);
          setAdminRole(null);
        }
      }
    });
    return () => { active = false; unsubscribe(); };
  }, []);

  const [showSplash, setShowSplash] = useState(true);
  const [problems, setProblems]     = useState<Problem[]>([]);
  const [page, setPage]             = useState<"home"|"dashboard"|"board"|"submit"|"admin"|"settings"|"manageusers"|"achievements"|"gallery"|"notices"|"profile"|"login"|"user-settings"|"search"|"schemes"|"ai"|"reels">("dashboard");
  const [parasMessages, setParasMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    { role: "assistant", text: "नमस्ते! मैं Paras AI हूँ — Gram Sabha Pahrajpur का AI सहायक। मैं गाँव की समस्याओं का विश्लेषण, महत्वपूर्ण कार्यों की प्राथमिकता, जानकारी समझाने और पोस्ट/नोटिस का ड्राफ्ट बनाने में मदद कर सकता हूँ। आप क्या करना चाहते हैं?" }
  ]);
  const [parasInput, setParasInput] = useState("");
  const [parasLoading, setParasLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [publicProfileUser, setPublicProfileUser] = useState<PublicProfileData | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminRole, setAdminRole] = useState<AdminRole | null>(null);
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([]);
  const [toast, setToast]           = useState<string | null>(null);
  const [filterCat, setFilterCat]   = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterWard, setFilterWard] = useState("All");
  const [search, setSearch]         = useState("");
  const [sort, setSort]             = useState("newest");
  const [loading, setLoading]       = useState(true);

  // Dynamic admin-configurable settings
  const [adminPassword, setAdminPassword] = useState("admin123");
  const [userAdminPassword, setUserAdminPassword] = useState("useradmin123");
  const [complaintAdminPassword, setComplaintAdminPassword] = useState("workadmin123");
  const [villageName, setVillageName]     = useState("Gram Sabha Pahrajpur");
  const [sarpanchName, setSarpanchName]   = useState("");
  const [achievements, setAchievements]   = useState<Achievement[]>([]);
  const [media, setMedia]                 = useState<MediaItem[]>([]);
  const [notices, setNotices]             = useState<Notice[]>([]);
  const [feedbacks, setFeedbacks]         = useState<Feedback[]>([]);
  const [whatsapp, setWhatsapp]           = useState("");
  const [instagram, setInstagram]         = useState("");
  const [sarpanchPhoto, setSarpanchPhoto] = useState("");
  
  const [adminDetails, setAdminDetails] = useState({
    super: { name: "", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
    userAdmin: { name: "User Admin", phone: "", email: "", whatsapp: "", instagram: "", photo: "" },
    complaintAdmin: { name: "Complaint Admin", phone: "", email: "", whatsapp: "", instagram: "", photo: "" }
  });

  const [sarpanchAddress, setSarpanchAddress] = useState("Gram Sabha Pahrajpur, Ballia, Uttar Pradesh");
  const [theme, setTheme]                 = useState<"dark"|"light">("light");
  const [showSubmitFAB, setShowSubmitFAB] = useState(false);
  const [voiceDraft, setVoiceDraft] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  
  // Load sarpanch settings from Firestore in realtime
  
  useEffect(() => {
    const unsubAdmin = onSnapshot(doc(db, "settings", "allAdmins"), (snap) => {
      if (snap.exists()) setAdminDetails(snap.data() as any);
    });
    return () => unsubAdmin();
  }, []);

useEffect(() => {
    const sq = doc(db, "settings", "sarpanch");
    const unsubSarpanch = onSnapshot(sq, (snap) => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.sarpanchName) setSarpanchName(d.sarpanchName);
        if (d.sarpanchAddress) setSarpanchAddress(d.sarpanchAddress);
        if (d.villageName) setVillageName(d.villageName);
      }
    });
    return () => unsubSarpanch();
  }, []);

    // Search users state
  const [searchUsers, setSearchUsers] = useState<AppUser[]>([]);

  // Load registered users for public search
  useEffect(() => {
    const unsubUsers = onSnapshot(collection(db, "users"), (snap) => {
      const list = snap.docs
        .map(d => d.data() as AppUser)
        .filter(u => !!u && !!u.id && !!u.name);
      setSearchUsers(list);
    });
    return () => unsubUsers();
  }, []);

  // Load problems from Firestore in realtime
  useEffect(() => {
    const q = query(collection(db, "problems"), orderBy("submittedAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setProblems(list);
    });
    return () => unsub();
  }, []);

  
  // Load settings from Firestore
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "main"), (snap) => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.villageName) setVillageName(d.villageName);
        if (d.sarpanchName) setSarpanchName(d.sarpanchName);
        if (d.sarpanchAddress) setSarpanchAddress(d.sarpanchAddress);
        if (d.whatsapp) setWhatsapp(d.whatsapp);
        if (d.instagram) setInstagram(d.instagram);
        if (d.theme) setTheme(d.theme);
        if (d.sarpanchPhoto) setSarpanchPhoto(d.sarpanchPhoto);
      }
    });
    return () => unsub();
  }, []);

  
  // Load achievements, media, notices, feedbacks from Firestore
  useEffect(() => {
    const unsub1 = onSnapshot(doc(db, "settings", "achievements"), (snap) => {
      if (snap.exists() && snap.data().list) setAchievements(snap.data().list);
    });
        const unsub2 = onSnapshot(doc(db, "settings", "media"), (snap) => {
          if (snap.exists() && snap.data().list) setMedia(snap.data().list);
        });
    const unsub3 = onSnapshot(doc(db, "settings", "notices"), (snap) => {
      if (snap.exists() && snap.data().list) setNotices(snap.data().list);
    });
    const unsub4 = onSnapshot(doc(db, "settings", "feedback"), (snap) => {
      if (snap.exists() && snap.data().list) setFeedbacks(snap.data().list);
    });
    return () => { unsub1(); unsub2(); unsub3(); unsub4(); };
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  // Load blocked users list from Firestore in realtime
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blockedUsers"), (snap) => {
      setBlockedUsers(snap.docs.map(d => d.data() as BlockedUser));
    });
    return () => unsub();
  }, []);

  // Cache media for instant load
  useEffect(() => {
    if (media.length > 0) {
      try { localStorage.setItem('cached-media', JSON.stringify(media)); } catch {}
    }
  }, [media]);

  const saveProblems = (list: Problem[]) => {
    setProblems(list);
    // Problems saved to Firestore
  };

  const addProblem = async (p: Problem) => {
    if (blockedUsers.some(u => u.mobile === p.mobile)) {
      showToast("❌ Aapka number block kar diya gaya hai. Aap complaint submit nahi kar sakte.");
      throw new Error("blocked");
    }
    try {
      const firestoreData = p as any;
      const cleanData = Object.fromEntries(Object.entries(firestoreData).filter(([_, v]) => v !== undefined));
      await setDoc(doc(db, "problems", p.id), cleanData);
      setSubmitSuccess(true);
      showToast(`✅ Problem submitted! Your ID: #${p.id}`);
    } catch(e: any) {
      showToast("❌ Submit failed. Try again.");
      throw e;
    }
  };

  const updateProblem = async (id: string, changes: Partial<Problem>) => {
    const normalizedChanges: Partial<Problem> = { ...changes };
    if (changes.status === "Resolved") {
      const existingProblem = problems.find(p => p.id === id);
      if (!existingProblem?.resolvedAt) normalizedChanges.resolvedAt = new Date().toISOString();
    } else if (changes.status && changes.status !== "Resolved") {
      normalizedChanges.resolvedAt = null;
    }
    await updateDoc(doc(db, "problems", id), normalizedChanges);
    showToast("✅ Problem updated successfully.");
  };

  const deleteProblem = async (id: string) => {
    await deleteDoc(doc(db, "problems", id));
    showToast("🗑 Issue deleted.");
  };

  const clearResolved = async () => {
    await Promise.all(problems.filter(p => p.status === "Resolved").map(p => deleteDoc(doc(db, "problems", p.id))));
    showToast("🗑 All resolved issues deleted.");
  };

  const clearAll = async () => {
    await Promise.all(problems.map(p => deleteDoc(doc(db, "problems", p.id))));
    showToast("🗑 All issues cleared.");
  };

  const saveAchievements = (list: Achievement[]) => {
    setAchievements(list);
    try { setDoc(doc(db, "settings", "achievements"), { list: list }); } catch (_) {}
  };

  const addAchievement = (a: Achievement) => saveAchievements([a, ...achievements]);
  const deleteAchievement = (id: string) => saveAchievements(achievements.filter(a => a.id !== id));

    const saveMedia = (list: MediaItem[]) => { setMedia(list); try { const cleanList = list.map(({photo, ...rest}) => rest); setDoc(doc(db, "settings", "media"), { list: cleanList }); } catch (_) {} };
    const addMedia = (m: MediaItem) => saveMedia([m, ...media]);
    const deleteMedia = (id: string) => saveMedia(media.filter(m => m.id !== id));

  const saveNotices = (list: Notice[]) => {
    setNotices(list);
    try { setDoc(doc(db, "settings", "notices"), { list: list }); } catch (_) {}
  };
  const addNotice    = (n: Notice) => saveNotices([n, ...notices]);
  const deleteNotice = (id: string) => saveNotices((typeof notices !== "undefined" && notices ? notices : []).filter(n => n.id !== id));

  const saveFeedbacks  = (list: Feedback[]) => { setFeedbacks(list); try { setDoc(doc(db, "settings", "feedback"), { list: list }); } catch (_) {} };
  const addFeedback    = (f: Feedback) => saveFeedbacks([f, ...feedbacks]);
  const deleteFeedback = (id: string)  => saveFeedbacks(feedbacks.filter(f => f.id !== id));

  const saveSocial = (w: string, i: string) => {
    setWhatsapp(w); setInstagram(i);
    try { saveSettings({ whatsapp: w }); saveSettings({ instagram: i }); } catch (_) {}
  };
  const saveSarpanchPhoto = (p: string) => {
    setSarpanchPhoto(p);
    try { setDoc(doc(db, "settings", "main"), { sarpanchPhoto: p }, { merge: true }); localStorage.setItem("gram-seva:sarpanchPhoto", p); } catch (_) {}
  };

  const saveSarpanchAddress = (addr: string) => {
    setSarpanchAddress(addr);
    try { saveSettings({ sarpanchAddress: addr }); } catch (_) {}
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { saveSettings({ theme: next }); } catch (_) {}
  };

  const savePassword = (pw: string) => {
    try { setDoc(doc(db, "settings", "main"), { adminPassword: pw }, { merge: true }); } catch (_) {}
    setAdminPassword(pw);
    localStorage.setItem("gram-seva:adminPw", pw);
  };

  const saveUserAdminPassword = (pw: string) => {
    try { setDoc(doc(db, "settings", "main"), { userAdminPassword: pw }, { merge: true }); } catch (_) {}
    setUserAdminPassword(pw);
  };

  const saveComplaintAdminPassword = (pw: string) => {
    try { setDoc(doc(db, "settings", "main"), { complaintAdminPassword: pw }, { merge: true }); } catch (_) {}
    setComplaintAdminPassword(pw);
  };

  const blockUser = async (mobile: string, name: string, reason = "Fake / Spam") => {
    await setDoc(doc(db, "blockedUsers", mobile), { mobile, name, reason, blockedAt: new Date().toISOString() });
  };

  const unblockUser = async (mobile: string) => {
    await deleteDoc(doc(db, "blockedUsers", mobile));
  };

  const deleteUserAndComplaints = async (mobile: string, name: string) => {
    const userProblems = problems.filter(p => p.mobile === mobile);
    await Promise.all(userProblems.map(p => deleteDoc(doc(db, "problems", p.id))));
    await blockUser(mobile, name, "Fake user — admin ne delete kiya");
    showToast(`🗑 ${name} aur unki saari complaints delete kar di gayi`);
  };

  const saveInfo = (v: string, s: string) => {
    setVillageName(v); setSarpanchName(s);
    saveSettings({ villageName: v });
    saveSettings({ sarpanchName: s });
  };

  const showToast = (msg: string) => setToast(msg);

  const saveUser = async (u: AppUser) => {
    await setDoc(doc(db, "users", u.id), { ...u }, { merge: true });
    setCurrentUser(u); localStorage.setItem("gsp-user", JSON.stringify(u));
    showToast("✅ Profile updated.");
  };

  const logoutUser = () => { void signOut(auth).catch(console.error); setCurrentUser(null); setIsAdmin(false); setAdminRole(null); localStorage.removeItem("gsp-user"); localStorage.removeItem("isAdmin"); localStorage.removeItem("adminRole"); setPage("home"); showToast("Logged out."); };

  const logout = () => { void signOut(auth).catch(console.error); setCurrentUser(null); setIsAdmin(false); setAdminRole(null); localStorage.removeItem("gsp-user"); localStorage.removeItem("isAdmin"); localStorage.removeItem("adminRole"); setPage("home"); };
  const askParasAI = async (question?: string) => {
    const prompt = (question ?? parasInput).trim();
    if (!prompt || parasLoading) return;
    const nextMessages = [...parasMessages, { role: "user" as const, text: prompt }];
    setParasMessages(nextMessages);
    setParasInput("");
    setParasLoading(true);
    try {
      const response = await fetch("/api/paras-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          history: nextMessages.slice(-10).map(m => ({ role: m.role, text: m.text })),
          context: {
            villageName,
            problems: problems.slice(0, 80).map(p => ({ id: p.id, title: p.title, category: p.category, status: p.status, ward: p.ward, priority: p.priority, date: p.date, description: p.description })),
            notices: notices.slice(0, 30).map(n => ({ title: n.title, body: n.body, date: n.date })),
            achievements: achievements.slice(0, 20).map(a => ({ title: a.title, description: a.description, date: a.date })),
          }
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Paras AI अभी जवाब नहीं दे पाया।");
      setParasMessages(prev => [...prev, { role: "assistant", text: String(data.reply || "मुझे कोई जवाब नहीं मिला।") }]);
    } catch (error) {
      setParasMessages(prev => [...prev, { role: "assistant", text: error instanceof Error ? error.message : "कनेक्शन में समस्या है। कृपया फिर कोशिश करें।" }]);
    } finally {
      setParasLoading(false);
    }
  };

  const canManageComplaints = adminRole === "super" || adminRole === "complaint-admin";
  const canManageUsers = adminRole === "super" || adminRole === "user-admin";

  const filtered = problems.filter(p => {
    if (filterCat    !== "All" && p.category !== filterCat)    return false;
    if (filterStatus !== "All" && p.status   !== filterStatus) return false;
    if (filterWard   !== "All" && p.ward     !== filterWard)   return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.id.includes(search.toUpperCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sort === "newest") return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    if (sort === "oldest") return new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    const order: Record<string, number> = { Urgent: 0, High: 1, Medium: 2, Low: 3 };
    return order[a.priority] - order[b.priority];
  });

  const stats = {
    total:      problems.length,
    pending:    problems.filter(p => p.status === "Pending").length,
    inprogress: problems.filter(p => p.status === "In Progress").length,
    resolved:   problems.filter(p => p.status === "Resolved").length,
  };

  const navLinks = [
    { id: "schemes" as const, label: "Schemes", icon: "🏛" },
    { id: "home" as const, label: "Home", icon: "⌂" },
    { id: "reels" as const, label: "Reels", icon: "🎬" },
    { id: "dashboard" as const, label: "Dashboard", icon: "▦" },
    { id: "notices" as const, label: "Notices", icon: "📢" },
    { id: "achievements" as const, label: "Achievements", icon: "🏆" },
    { id: "profile" as const, label: currentUser ? "Profile" : "Login", icon: currentUser ? "👤" : "🔐" },
  ];

  return (
    <>
      {showSplash && <WelcomeSplash onDone={() => { localStorage.setItem("gsp-visited","1"); setShowSplash(false); }} />}
      <div data-theme={theme} style={{ minHeight:"100vh", background:"var(--bg-page)", color:"var(--text-main)" }} className="grid-bg"><div className="aurora-bg"><div className="ab ab1"/><div className="ab ab2"/><div className="ab ab3"/><div className="ab ab4"/></div>
      <style>{GLOBAL_STYLE}</style>

      {/* NAVBAR */}
      <nav className="desktop-nav" style={{ padding: "10px 12px" }}>
        <div className="glass-dark" style={{ borderRadius: 14, padding: "8px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          {/* Logo + Name */}
          <div onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", background: "rgba(255,255,255,0.08)" }}>
              <img src="/logo.svg" alt="GSP Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: 16, fontWeight: 700 }}>
              {villageName}
            </span>
          </div>
          {/* Scrollable nav links */}
          <div style={{ flex: 1, overflowX: "auto", display: "flex", gap: 4, alignItems: "center", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
            {navLinks.map(l => {
          if(l.id === "profile" && isAdmin) return null;
          return (
          <button key={l.id} className="btn-ghost" onClick={() => { if (l.id === "profile" && !currentUser) setPage("login"); else setPage(l.id); }}
            style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === l.id ? "var(--cbg12)" : "var(--cbg5)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <UiIcon name={l.icon} size={14} /> {l.label}
          </button>
        )})}
        <button className="btn-white" onClick={() => { if (!currentUser) setPage("login"); else setPage("submit"); }} style={{ borderRadius: 8, padding: "6px 12px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Plus size={14} /> Post Problem
        </button>
        {isAdmin ? (
          <button className="btn-ghost" onClick={() => setPage("profile")} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, background: page === "profile" ? "var(--cbg12)" : "var(--cbg5)", display: "inline-flex", alignItems: "center", gap: 6, color: "#fbbf24" }}>
            <ShieldAlert size={14} /> Admin Profile
          </button>
        ) : (
          <button className="btn-ghost" onClick={() => setPage("admin")} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 12, whiteSpace: "nowrap", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ShieldAlert size={14} /> Admin Login
          </button>
        )}
            <button onClick={toggleTheme} style={{ borderRadius: 8, padding: "5px 11px", fontSize: 14, whiteSpace: "nowrap", flexShrink: 0, background: "var(--cbg7)", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }} title="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {publicProfileUser && (
        <PublicUserProfile
          profile={publicProfileUser}
          problems={problems}
          onClose={() => setPublicProfileUser(null)}
        />
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* ── PARAS AI ─────────────────────────────────────────────────────── */}
        {false && page === "ai" && (
          <div style={{ maxWidth: 900, margin: "22px auto", paddingBottom: 20 }}>
            <div style={{ borderRadius: 26, overflow: "hidden", border: "1px solid var(--cbg12)", background: "var(--bg-card, rgba(255,255,255,.78))", boxShadow: "0 18px 55px rgba(80,65,180,.12)" }}>
              <div style={{ padding: "22px 20px", background: "linear-gradient(120deg,#4f46e5,#7c3aed 52%,#0891b2)", color: "#fff", display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 54, height: 54, borderRadius: 18, background: "rgba(255,255,255,.18)", display: "grid", placeItems: "center", fontSize: 30 }}>🤖</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-.03em" }}>Paras AI</div>
                  <div style={{ fontSize: 12, opacity: .88, marginTop: 4 }}>गाँव का AI सहायक · Gemini-powered</div>
                </div>
                <div style={{ fontSize: 11, borderRadius: 99, padding: "6px 10px", background: "rgba(255,255,255,.17)" }}>AI Assistant</div>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {[
                    "गाँव की समस्याओं का विश्लेषण करो",
                    "सबसे जरूरी 5 काम बताओ",
                    "एक नई ग्राम सभा सूचना का ड्राफ्ट बनाओ",
                    "पानी और सड़क की समस्याओं का सारांश दो",
                  ].map(prompt => (
                    <button key={prompt} onClick={() => askParasAI(prompt)} disabled={parasLoading} style={{ border: "1px solid var(--cbg12)", background: "var(--cbg5)", color: "var(--text-main)", borderRadius: 99, padding: "9px 12px", fontSize: 12, cursor: parasLoading ? "wait" : "pointer" }}>{prompt}</button>
                  ))}
                </div>
                <div aria-live="polite" style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 280, maxHeight: "52vh", overflowY: "auto", padding: "8px 2px 14px" }}>
                  {parasMessages.map((message, index) => (
                    <div key={index} style={{ alignSelf: message.role === "user" ? "flex-end" : "stretch", maxWidth: message.role === "user" ? "88%" : "100%", display: "flex", gap: 9, alignItems: "flex-start" }}>
                      {message.role === "assistant" && <div style={{ width: 30, height: 30, borderRadius: 11, flexShrink: 0, display: "grid", placeItems: "center", background: "linear-gradient(135deg,#6366f1,#0891b2)", color: "#fff" }}>✦</div>}
                      <div style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", lineHeight: 1.7, fontSize: 14, padding: "12px 14px", borderRadius: 16, background: message.role === "user" ? "linear-gradient(135deg,#5b4be8,#7c3aed)" : "var(--cbg5)", color: message.role === "user" ? "#fff" : "var(--text-main)", border: message.role === "assistant" ? "1px solid var(--cbg8)" : "none" }}>{message.text}</div>
                    </div>
                  ))}
                  {parasLoading && <div style={{ color: "var(--ct4)", fontSize: 13, padding: "4px 42px" }}>Paras AI सोच रहा है…</div>}
                </div>
                <form onSubmit={e => { e.preventDefault(); void askParasAI(); }} style={{ display: "flex", gap: 9, alignItems: "flex-end", paddingTop: 12, borderTop: "1px solid var(--cbg8)" }}>
                  <textarea value={parasInput} onChange={e => setParasInput(e.target.value)} placeholder="Paras AI से कुछ भी पूछें…" rows={2} disabled={parasLoading} style={{ flex: 1, resize: "vertical", minWidth: 0, border: "1px solid var(--cbg12)", borderRadius: 15, padding: "12px 14px", font: "inherit", fontSize: 14, color: "var(--text-main)", background: "var(--cbg4)", outline: "none" }} />
                  <button type="submit" onClick={e => { e.preventDefault(); void askParasAI(); }} disabled={parasLoading || !parasInput.trim()} aria-label="Paras AI को संदेश भेजें" style={{ height: 46, minWidth: 50, border: 0, borderRadius: 14, color: "#fff", background: parasLoading || !parasInput.trim() ? "#9ca3af" : "linear-gradient(135deg,#5b4be8,#0891b2)", fontSize: 20, cursor: parasLoading || !parasInput.trim() ? "not-allowed" : "pointer", touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}>➤</button>
                </form>
                <div style={{ marginTop: 10, color: "var(--ct4)", fontSize: 11, lineHeight: 1.5 }}>Paras AI की सलाह की जाँच कर लें। यह पोस्ट और नोटिस का ड्राफ्ट बना सकता है; आपकी पुष्टि के बिना वेबसाइट पर कुछ प्रकाशित नहीं करेगा।</div>
              </div>
            </div>
          </div>
        )}

        {/* ── HOME ─────────────────────────────────────────────────────────── */}
        {page === "dashboard" && (
          <div>
            {/* ── HERO ──────────────────────────────────────────────── */}
            <div style={{ padding:"52px 0 40px", position:"relative", overflow:"hidden" }}>
              {/* bg glow */}
              <div style={{ position:"absolute",width:600,height:600,borderRadius:"50%",top:-240,left:-180,background:"radial-gradient(circle,rgba(124,92,252,0.10) 0%,transparent 70%)",pointerEvents:"none" }}/>
              <div style={{ position:"absolute",width:400,height:400,borderRadius:"50%",bottom:-120,right:-60,background:"radial-gradient(circle,rgba(56,217,245,0.06) 0%,transparent 70%)",pointerEvents:"none" }}/>

              <div className="hero-split" style={{ display:"flex",alignItems:"center",gap:52,position:"relative" }}>
                {/* LEFT */}
                <div className="hero-left" style={{ flex:1,minWidth:0,display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
                  <FadeIn>
                    <span style={{ display:"inline-flex",alignItems:"center",gap:7,padding:"5px 14px",borderRadius:100,fontSize:12,fontWeight:600,letterSpacing:"0.04em",background:"rgba(124,92,252,0.12)",border:"1px solid rgba(124,92,252,0.32)",color:"#b57bee",marginBottom:22 }}>
                      <span style={{ width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px #4ade80",display:"inline-block",animation:"pulse-dot 2s infinite" }}/>
                      Digital Gram Panchayat Portal
                    </span>
                  </FadeIn>

                  <FadeIn delay={180}>
                <h1 style={{ margin: 0, fontSize: "clamp(28px, 5vw, 42px)", lineHeight: 1.2 }}>
                  <span style={{ display:"block",color:"var(--text-main)" }}>Gram Sabha Pahrajpur</span>
                  <span style={{ display:"block",color:"var(--ct4)",fontWeight:400,fontSize:"0.52em",marginTop:10,letterSpacing:"-0.01em",fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Village Governance, Reimagined</span>
                </h1>
                  </FadeIn>

                  <FadeIn delay={400}>
                    <p style={{ fontSize:15,color:"var(--ct45)",lineHeight:1.8,maxWidth:440,fontWeight:400,marginBottom:28 }}>
                      Report infrastructure problems. Track every resolution. Receive official notices from your Sarpanch — transparent and accountable governance.
                    </p>
                  </FadeIn>

                  <FadeIn delay={600}>
                    <div className="hero-ctas" style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                      <button className="btn-white" onClick={() => setPage("submit")} style={{ borderRadius:14,padding:"13px 28px",fontSize:15,fontWeight:700,display:"flex",alignItems:"center",gap:8 }}>
                        📋 Report a Problem <span style={{ opacity:0.7 }}>→</span>
                      </button>
                      <button className="btn-ghost" onClick={() => setPage("board")} style={{ borderRadius:14,padding:"13px 28px",fontSize:15,fontWeight:600 }}>
                        📊 View All Issues
                      </button>
                    </div>
                  </FadeIn>

                </div>

                {/* RIGHT — 3D Orb */}
                <div className="hero-orb-col" style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:16,flexShrink:0 }}>
                  <FadeIn delay={350}>
                    <div style={{ position:"relative",width:270,height:270 }}>
                      <div style={{ position:"absolute",inset:-40,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(124,92,252,0.22) 0%,transparent 70%)",animation:"pulseGlow 3s ease-in-out infinite",pointerEvents:"none" }}/>
                      <div style={{ position:"absolute",inset:16,borderRadius:"50%",background:"radial-gradient(ellipse at 35% 30%,rgba(181,123,238,0.95) 0%,rgba(124,92,252,0.75) 45%,rgba(56,217,245,0.45) 100%)",boxShadow:"0 0 60px rgba(124,92,252,0.55),0 0 120px rgba(124,92,252,0.22),inset 0 0 36px rgba(255,255,255,0.10)",animation:"floatOrb 5s ease-in-out infinite" }}>
                        <div style={{ position:"absolute",top:"14%",left:"20%",width:"38%",height:"22%",borderRadius:"50%",background:"rgba(255,255,255,0.26)",filter:"blur(7px)" }}/>
                                </div>
                      <div style={{ position:"absolute",top:"50%",left:"50%",width:11,height:11,marginTop:-5.5,marginLeft:-5.5,animation:"orbit1 5s linear infinite" }}><div style={{ width:11,height:11,borderRadius:"50%",background:"#38d9f5",boxShadow:"0 0 12px #38d9f5" }}/></div>
                      <div style={{ position:"absolute",top:"50%",left:"50%",width:8,height:8,marginTop:-4,marginLeft:-4,animation:"orbit2 7s linear infinite" }}><div style={{ width:8,height:8,borderRadius:"50%",background:"#f4c95d",boxShadow:"0 0 10px #f4c95d" }}/></div>
                      <div className="glass" style={{ position:"absolute",top:-6,right:-18,padding:"8px 14px",borderRadius:13,animation:"floatChip 4s ease-in-out infinite" }}>
                        <div style={{ fontSize:10,color:"var(--ct4)",marginBottom:2 }}>Resolved</div>
                                </div>
                      <div className="glass" style={{ position:"absolute",bottom:6,left:-18,padding:"8px 14px",borderRadius:13,animation:"floatChip 4.5s ease-in-out infinite 0.8s" }}>
                        <div style={{ fontSize:10,color:"var(--ct4)",marginBottom:2 }}>Total</div>
                                </div>
                      <div className="glass" style={{ position:"absolute",bottom:52,right:-20,padding:"6px 12px",borderRadius:11,animation:"floatChip 6s ease-in-out infinite 1.2s" }}>
                        <div style={{ display:"flex",alignItems:"center",gap:5 }}><div style={{ width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 7px #4ade80",animation:"pulse-dot 2s infinite" }}/><span style={{ fontSize:11,color:"var(--text-main)",fontWeight:600 }}>Live</span></div>
                      </div>
                    </div>
                    {/* mini stats strip */}
                    <div className="glass" style={{ padding:0,borderRadius:16,overflow:"hidden",width:270,marginTop:14 }}>
                      <div style={{ display:"flex" }}>
                        {([{num:stats.total,label:"Total",color:"#b57bee"},{num:stats.resolved,label:"Done",color:"#4ade80"},{num:stats.pending,label:"Pending",color:"#f4c95d"},{num:stats.inprogress,label:"Active",color:"#38d9f5"}] as const).map((s,i)=>(
                          <div key={s.label} style={{ flex:1,textAlign:"center",padding:"11px 4px",borderRight:i<3?"1px solid rgba(124,92,252,0.10)":"none" }}>
                                      <div style={{ fontSize:10,color:"var(--ct4)",marginTop:2,fontWeight:500 }}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>

            <FadeIn delay={1200}>
              <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
                <StatCard label="Total Problems" value={stats.total} color="#b57bee" />
                <StatCard label="Pending" value={stats.pending} color="#f4c95d" />
                <StatCard label="In Progress" value={stats.inprogress} color="#7c5cfc" />
                <StatCard label="Resolved" value={stats.resolved} color="#4ade80" />
              </div>
            </FadeIn>

            <FadeIn delay={1700}>
                        <CategoryGrid problems={problems} onNavigate={() => setPage("board")} />
            </FadeIn>

            {problems.length > 0 && (
              <FadeIn delay={1900}>
                <div style={{ marginTop: 40 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                              <button className="btn-ghost" onClick={() => setPage("board")} style={{ borderRadius: 10, padding: "6px 14px", fontSize: 13 }}>View All</button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {problems.slice(0, 3).map(p => <ProblemCard key={p.id} problem={p} isAdmin={false} onUpdate={updateProblem} onDelete={deleteProblem} />)}
                  </div>
                </div>
              </FadeIn>
            )}

            {problems.length === 0 && !loading && (
              <FadeIn delay={1600}>
                <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center", marginTop: 20 }}>
                  <div style={{ marginBottom: 16 }}><Leaf size={48} color="#4ade80" /></div>
                            <div style={{ color: "var(--ct4)", fontSize: 14, marginBottom: 24 }}>Be the first to report a problem in your village.</div>
                  <button className="btn-white" onClick={() => setPage("submit")} style={{ borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600 }}>Submit First Problem →</button>
                </div>
              </FadeIn>
            )}

            
            {/* Panchayat Admins Directory for Users */}
            <div style={{ marginTop: 40 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                {Object.entries(adminDetails || {}).map(([key, adm]: [string, any]) => {
                  if (!adm || !adm.name) return null;
                  const roleTitle = key === "super" ? "Super Admin" : key === "userAdmin" ? "User Admin" : "Complaint Admin";
                  return (
                    <div key={key} className="glass" style={{ borderRadius: 18, padding: "18px", display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg,#fbbf24,#d97706)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 700, fontSize: 20, overflow: "hidden", flexShrink: 0 }}>
                          {adm.photo ? <img src={adm.photo} style={{width:"100%", height:"100%", objectFit:"cover"}} /> : adm.name.slice(0,1).toUpperCase()}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#fbbf24" }}>{roleTitle}</div>
                          <div style={{ fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{adm.name}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ct4)", display: "flex", flexDirection: "column", gap: 4 }}>
                        {adm.phone && <div>📞 {adm.phone}</div>}
                        {adm.email && <div>✉️ {adm.email}</div>}
                      </div>
                      <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                        {adm.whatsapp && (
                          <a href={`https://wa.me/91${adm.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(37,211,102,0.15)", color: "#25d366", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            WhatsApp
                          </a>
                        )}
                        {adm.phone && (
                          <a href={`tel:${adm.phone}`} style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(59,130,246,0.15)", color: "#3b82f6", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            Call
                          </a>
                        )}
                        {adm.instagram && (
                          <a href={`https://instagram.com/${adm.instagram.replace("@","")}`} target="_blank" rel="noreferrer" style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(225,48,108,0.15)", color: "#e1306c", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Sarpanch Profile + Social */}
            <FadeIn delay={1800}>
              <div style={{ marginTop: 40 }}>
                          <SarpanchCard sarpanchName={sarpanchName} photo={sarpanchPhoto} whatsapp={whatsapp} instagram={instagram} address={sarpanchAddress} />
              </div>
            </FadeIn>

            {/* Notices preview on home */}
            {notices.length > 0 && (
              <FadeIn delay={2000}>
                <div style={{ marginTop: 40 }}>
                  <NoticesPage notices={notices} isAdmin={isAdmin} onDelete={deleteNotice} compact onViewAll={() => setPage("notices")} />
                </div>
              </FadeIn>
            )}

            {/* Photo Carousel */}
            <FadeIn delay={1800}>
              <PhotoCarousel media={media} />
            </FadeIn>

            

            {/* Feedback Section */}
            <FadeIn delay={2200}>
              <div style={{ marginTop: 40 }}>
                <FeedbackSection feedbacks={feedbacks} onAdd={addFeedback} />
              </div>
            </FadeIn>

            {/* Made By tag */}
            <div style={{ marginTop: 60, textAlign: "center" }}>
              <span style={{ fontSize: 12, color: "var(--ct4)", letterSpacing: "0.08em", fontWeight: 500 }}>
                Made with ❤️ by <span style={{ color: "var(--text-main)", fontWeight: 700 }}>Abhinav Yadav</span>
              </span>
            </div>
          </div>
        )}

        {/* ── COMMUNITY HOME / INSTAGRAM-STYLE FEED ───────────────────────── */}
        {page === "reels" && <GSPReels user={currentUser} isAdmin={isAdmin && canManageComplaints} problems={problems} onLogin={() => setPage("login")} showToast={showToast} />}

        {page === "home" && (
          <>
            <CommunityFeed
              problems={problems}
              user={currentUser}
              onUpdate={updateProblem as any}
              onOpenLogin={() => setPage("login")}
              onOpenUserProfile={setPublicProfileUser}
              isAdmin={isAdmin && canManageComplaints}
            />
            <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 12px", width: "100%" }}>
              <GSPReels user={currentUser} isAdmin={isAdmin && canManageComplaints} problems={problems} onLogin={() => setPage("login")} showToast={showToast} />
            </div>
          </>
        )}

        {/* ── SUBMIT ───────────────────────────────────────────────────────── */}
        {page === "submit" && (
          <div style={{ paddingTop: 40 }}>
            <FadeIn>{currentUser ? <SubmitForm currentUser={currentUser} onSubmit={addProblem} onSubmitted={() => setPage("home")} sarpanchName={sarpanchName} sarpanchPhoto={sarpanchPhoto} voiceDraft={voiceDraft} /> : <AuthPage onLogin={u => { setCurrentUser(u); setPage("submit"); }} />}</FadeIn>
          </div>
        )}

        {page === "search" && (
          <FadeIn>
            <UserSearchPage
              users={searchUsers}
              problems={problems}
              onOpenPost={(selectedUser, post) => {
                if (post) {
                  setSearch(post.title || post.name || "");
                  setPage("board");
                } else if (selectedUser) {
                  setPage("search");
                }
              }}
            />
          </FadeIn>
        )}

        {page === "profile" && (
      <FadeIn>
        {isAdmin ? (
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "30px 16px" }}>
            <div className="glass" style={{ borderRadius: 24, padding: "32px 24px", border: "1px solid rgba(251,191,36,0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg, #fbbf24, #d97706)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 10px 25px rgba(245,158,11,0.4)", flexShrink: 0, overflow: "hidden", border: "3px solid rgba(251,191,36,0.6)" }}>
                  {sarpanchPhoto ? (
                    <img src={sarpanchPhoto} alt="Admin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: 36, fontWeight: 800 }}>{(sarpanchName || "A").slice(0,1).toUpperCase()}</span>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#fbbf24", background: "rgba(251,191,36,0.12)", padding: "3px 10px", borderRadius: 20, marginBottom: 6 }}>
                    ⭐ Verified Administrator
                  </div>
                  <div style={{ color: "var(--text-main)", fontSize: 20, fontWeight: 800, lineHeight: 1.3, marginBottom: 4 }}>
                    {sarpanchName.trim() || (adminRole === "super" ? "Super Admin" : adminRole === "user-admin" ? "User Admin" : "Complaint Admin")}
                  </div>
                  <div style={{ color: "var(--ct4)", fontSize: 13, marginTop: 4 }}>
                    Role: <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{adminRole === "super" ? "Super Admin" : adminRole === "user-admin" ? "User Admin" : "Complaint Admin"}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#fbbf24" }}>{problems.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Total Issues</div>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#38d9f5" }}>{notices.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Notices</div>
                </div>
                <div className="glass" style={{ borderRadius: 14, padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#4ade80" }}>{achievements.length}</div>
                  <div style={{ fontSize: 11, color: "var(--ct4)", marginTop: 2 }}>Works</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {canManageComplaints && (
                  <button className="btn-white" onClick={() => setPage("settings")} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
                    <Settings size={18} /> Portal Settings & Info
                  </button>
                )}
                {canManageUsers && (
                  <button className="btn-white" onClick={() => setPage("manageusers")} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #38d9f5, #0891b2)" }}>
                    <User size={18} /> Manage Users & Blocklist
                  </button>
                )}
                <button className="btn-danger" onClick={logout} style={{ padding: "14px", borderRadius: 14, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 8 }}>
                  <LogIn size={18} style={{transform:"rotate(180deg)"}} /> Logout Admin
                </button>
              </div>
            </div>
          </div>
        ) : currentUser ? (
          <ProfileErrorBoundary>
            <UserProfilePage user={currentUser} problems={problems} onUpdate={updateProblem as any} onDelete={deleteProblem} onLogout={logoutUser} onOpenSettings={() => setPage("user-settings")} />
          </ProfileErrorBoundary>
        ) : (
          <AuthPage onLogin={u => { setCurrentUser(u); setPage("profile"); }} />
        )}
      </FadeIn>
    )}

        {/* ── USER LOGIN ───────────────────────────────────────────────────── */}
        {page === "login" && <AuthPage onLogin={u => { setCurrentUser(u); setPage("home"); showToast(`✅ Welcome ${u.name}!`); }} />}

        {page === "user-settings" && (currentUser ? <UserSettingsPage user={currentUser} onSave={saveUser} onBack={() => setPage("profile")} /> : <AuthPage onLogin={u => { setCurrentUser(u); setPage("profile"); }} />)}

        {/* ── BOARD ────────────────────────────────────────────────────────── */}
        {page === "board" && (
          <div style={{ paddingTop: 32 }}>
            <FadeIn>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
                  {isAdmin ? "🛡 Admin Dashboard" : "All Reported Issues"}
                </h2>
                <p style={{ fontSize: 13, color: "var(--ct4)" }}>{filtered.length} of {problems.length} issues shown</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <FilterBar filterCat={filterCat} setFilterCat={setFilterCat} filterStatus={filterStatus} setFilterStatus={setFilterStatus}
                filterWard={filterWard} setFilterWard={setFilterWard} search={search} setSearch={setSearch} sort={sort} setSort={setSort} />
            </FadeIn>
            {loading ? (
              <div style={{ textAlign: "center", padding: 60, color: "var(--ct3)", fontSize: 14 }}>Loading…</div>
            ) : filtered.length === 0 ? (
              <FadeIn delay={200}>
                <div className="glass" style={{ borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
                  <Search size={40} style={{ marginBottom: 12 }} />
                            <div style={{ color: "var(--ct4)", fontSize: 13 }}>{problems.length === 0 ? "No problems have been submitted yet." : "Try adjusting your filters."}</div>
                </div>
              </FadeIn>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {filtered.map((p, i) => (
                  <FadeIn key={p.id} delay={i * 40}>
                    <ProblemCard problem={p} isAdmin={isAdmin && canManageComplaints} onUpdate={updateProblem} onDelete={deleteProblem} />
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── NOTICES ──────────────────────────────────────────────────────── */}
        {page === "notices" && (
          <div style={{ paddingTop: 32, maxWidth: 800, margin: "0 auto" }}>
            <FadeIn>
              <NoticesPage notices={notices} isAdmin={isAdmin} onDelete={deleteNotice} />
            </FadeIn>
          </div>
        )}

        
                {/* ── SCHEMES ──────────────────────────────────────────────────────── */}
        {page === "schemes" && (
          <div style={{ paddingTop: 28, maxWidth: 840, margin: "0 auto", paddingBottom: 90 }}>
            <FadeIn>
              <div style={{ marginBottom: 28, padding: "0 16px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 20, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", fontSize: 12, color: "#22c55e", marginBottom: 16, fontWeight: 700, letterSpacing: "0.04em" }}>
                  <Landmark size={15} /> Sarkari Yojna & Welfare Schemes
                </div>
                <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "var(--text-main)", letterSpacing: "-0.02em" }}>Village Development Schemes</h2>
                <p style={{ fontSize: 14, color: "var(--ct45)", lineHeight: 1.6 }}>Gram Sabha Pahrajpur ke nagriko ke liye kendra aur rajya sarkar ki sabhi pramukh yojnayein.</p>
              </div>

              {/* Admin Add Scheme Box */}
              {isAdmin && (
                <div className="glass" style={{ borderRadius: 22, padding: "24px", marginBottom: 28, margin: "0 16px 28px 16px", border: "1px solid rgba(34,197,94,0.35)", background: "var(--cbg8)" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#22c55e", display: "flex", alignItems: "center", gap: 8 }}>
                    <span>➕</span> Publish New Government Scheme
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <input 
                      id="newSchemeTitle" 
                      placeholder="Scheme Name (e.g. PM Kisan Samman Nidhi)..." 
                      style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "var(--input-bg)", color: "var(--input-color)", fontSize: 14, outline: "none" }} 
                    />
                    <textarea 
                      id="newSchemeBody" 
                      placeholder="Enter scheme guidelines, eligibility criteria, required documents, and benefits..." 
                      rows={4}
                      style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "var(--input-bg)", color: "var(--input-color)", fontSize: 14, outline: "none", resize: "vertical" }} 
                    />
                    <button 
                      className="btn-white" 
                      onClick={() => {
                        const titleEl = document.getElementById("newSchemeTitle") as HTMLInputElement;
                        const bodyEl = document.getElementById("newSchemeBody") as HTMLTextAreaElement;
                        if (!titleEl || !bodyEl || !titleEl.value.trim() || !bodyEl.value.trim()) {
                          alert("Please fill both scheme title and description!");
                          return;
                        }
                        const newNotice: Notice = {
                          id: 'scheme_' + Date.now(),
                          title: titleEl.value.trim(),
                          body: bodyEl.value.trim(),
                          type: 'scheme',
                          date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                          createdAt: new Date().toISOString()
                        };
                        // Save schemes to the same Firestore-backed notices list used by the live listener.
                        // Updating React state alone makes the scheme disappear after refresh.
                        saveNotices([newNotice, ...(notices || []).filter(n => n.id !== newNotice.id)]);
                        titleEl.value = "";
                        bodyEl.value = "";
                        alert("✅ Scheme published successfully!");
                      }}
                      style={{ padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", fontSize: 14, alignSelf: "flex-start", boxShadow: "0 4px 16px rgba(34,197,94,0.3)" }}
                    >
                      Publish Scheme 🚀
                    </button>
                  </div>
                </div>
              )}
              
              {(typeof notices !== "undefined" && notices ? notices : []).filter(n => n.type === "scheme").length === 0 ? (
                <div className="glass" style={{ borderRadius: 24, padding: "56px 32px", textAlign: "center", margin: "0 16px" }}>
                  <div style={{ marginBottom: 16, color: "#22c55e", opacity: 0.8 }}><Landmark size={48} strokeWidth={1.5} /></div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>No Schemes Active</div>
                  <div style={{ color: "var(--ct4)", fontSize: 13 }}>Abhi tak koi sarkari yojna list nahi ki gayi hai.</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 16px" }}>
                  {(typeof notices !== "undefined" && notices ? notices : []).filter(n => n.type === "scheme").sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map(n => (
                    <div key={n.id} className="glass" style={{ borderRadius: 20, padding: "22px 24px", borderLeft: "4px solid #22c55e", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                        <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-main)", letterSpacing: "-0.01em" }}>{n.title}</div>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20, background: "rgba(34,197,94,0.15)", color: "#22c55e", whiteSpace: "nowrap" }}>🏛 Active Yojna</span>
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ct4)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                        <CalendarDays size={13} /> Published on {n.date}
                      </div>
                      <p style={{ fontSize: 14, color: "var(--ct65)", lineHeight: 1.75, whiteSpace: "pre-wrap", background: "var(--cbg4)", padding: "14px 16px", borderRadius: 14, border: "1px solid var(--cbg8)" }}>{n.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>
        )}


        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        {page === "gallery" && (
          <div style={{ paddingTop: 32, maxWidth: 960, margin: "0 auto" }}>
            <FadeIn>
              <GalleryPage media={media} isAdmin={isAdmin} onDelete={deleteMedia} />
            </FadeIn>
          </div>
        )}

        {/* ── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
        {page === "achievements" && (
          <div style={{ paddingTop: 32 }}>
            <AchievementsPage achievements={achievements} media={media} isAdmin={isAdmin} onDelete={deleteAchievement} onDeleteMedia={deleteMedia} />
          </div>
        )}

        {/* ── ADMIN LOGIN ───────────────────────────────────────────────────── */}
        {page === "admin" && !isAdmin && (
          <div className="glass" style={{ maxWidth: 480, margin: "60px auto", padding: 28, borderRadius: 20, textAlign: "center" }}>
            <LockKeyhole size={36} />
            <h2 style={{ marginTop: 12 }}>Admin access सुरक्षित है</h2>
            <p style={{ color: "var(--ct4)", lineHeight: 1.7 }}>Admin panel खोलने के लिए उस GSP अकाउंट से लॉगिन करें जिसे सर्वर पर Admin role दिया गया है। केवल Admin password डालने से अधिकार नहीं मिलेंगे।</p>
            <button className="btn-white" style={{ marginTop: 12, borderRadius: 10, padding: "10px 16px" }} onClick={() => setPage(currentUser ? "home" : "login")}>{currentUser ? "Home पर जाएँ" : "Login करें"}</button>
          </div>
        )}

        {/* ── MANAGE USERS (User-Admin) ───────────────────────────────────────── */}
        {page === "manageusers" && isAdmin && canManageUsers && (
          <ManageUsers
            problems={problems}
            blockedUsers={blockedUsers}
            onBlock={blockUser}
            onUnblock={unblockUser}
            onDeleteUser={deleteUserAndComplaints}
            showToast={showToast}
          />
        )}

        {/* ── SETTINGS ─────────────────────────────────────────────────────── */}
        {page === "settings" && isAdmin && canManageComplaints && (
          <AdminSettings
            adminDetails={adminDetails} setAdminDetails={setAdminDetails}
            problems={problems} achievements={achievements} media={media} notices={notices} feedbacks={feedbacks} adminPassword={adminPassword}
            userAdminPassword={userAdminPassword} complaintAdminPassword={complaintAdminPassword}
            villageName={villageName} sarpanchName={sarpanchName} sarpanchPhoto={sarpanchPhoto} sarpanchAddress={sarpanchAddress} whatsapp={whatsapp} instagram={instagram}
            onSavePassword={savePassword} onSaveUserAdminPassword={saveUserAdminPassword} onSaveComplaintAdminPassword={saveComplaintAdminPassword}
            onSaveInfo={saveInfo} onSaveSocial={saveSocial} onSaveSarpanchPhoto={saveSarpanchPhoto} onSaveSarpanchAddress={saveSarpanchAddress}
            onClearResolved={clearResolved} onClearAll={clearAll}
            onAddAchievement={addAchievement} onDeleteAchievement={deleteAchievement}
            onAddMedia={addMedia} onDeleteMedia={deleteMedia}
            onAddNotice={addNotice} onDeleteNotice={deleteNotice}
            onDeleteFeedback={deleteFeedback}
            showToast={showToast}
          />
        )}
      </div>

            {/* Instagram-style mobile bottom navigation */}
      <div className="mobile-bottom-nav">
        <button className={`mobile-nav-item ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")}>
          <Home size={26} strokeWidth={page === "home" ? 2.5 : 2} />
          <span className="mobile-nav-label">Home</span>
        </button>
        <button className={`mobile-nav-item ${page === "reels" ? "active" : ""}`} onClick={() => setPage("reels")}>
          <Video size={26} strokeWidth={page === "reels" ? 2.5 : 2} />
          <span className="mobile-nav-label">Reels</span>
        </button>
        <button className={`mobile-nav-item ${page === "dashboard" ? "active" : ""}`} onClick={() => setPage("dashboard")}>
          <LayoutDashboard size={26} strokeWidth={page === "dashboard" ? 2.5 : 2} />
          <span className="mobile-nav-label">Dash</span>
        </button>
        <button className="mobile-post-button" onClick={() => currentUser ? setPage("submit") : setPage("login")}>
          <Plus size={32} strokeWidth={2.5} color="#fff" />
        </button>
        <button className={`mobile-nav-item ${page === "search" ? "active" : ""}`} onClick={() => setPage("search")}>
          <Search size={26} strokeWidth={page === "search" ? 2.5 : 2} />
          <span className="mobile-nav-label">Search</span>
        </button>
        <button className={`mobile-nav-item ${page === "schemes" ? "active" : ""}`} onClick={() => setPage("schemes")}>
          <Landmark size={26} strokeWidth={page === "schemes" ? 2.5 : 2} />
          <span className="mobile-nav-label">Schemes</span>
        </button>
        <button className={`mobile-nav-item mobile-profile-item ${page === "profile" ? "active" : ""}`} onClick={() => currentUser ? setPage("profile") : setPage("login")}>
          <div className="mobile-profile-avatar">
            {currentUser?.avatar ? <img src={currentUser.avatar} alt="Profile" /> : <User size={20} />}
          </div>
          {currentUser && <i className="mobile-profile-dot" />}
          <span className="mobile-nav-label">Profile</span>
        </button>
      </div>

      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}

      {submitSuccess && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div className="glass" style={{ maxWidth: 420, width: "100%", borderRadius: 24, padding: 28, textAlign: "center" }}>
            <div style={{ width: 80, height: 80, margin: "0 auto 16px", borderRadius: "50%", background: "linear-gradient(155deg, #4ade80 0%, #16a34a 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(22,163,74,0.4)" }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>धन्यवाद!</div>
            <div style={{ fontSize: 14, color: "var(--ct4)", marginBottom: 18 }}>आपकी समस्या सफलतापूर्वक दर्ज की गई है</div>
            <div style={{ display: "flex", gap: 12, textAlign: "left", background: "var(--cbg6)", border: "1px solid var(--cbg12)", borderRadius: 16, padding: "14px 16px", marginBottom: 18 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #f0d080, #c9a84c)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#1a3a2a" }}>{sarpanchPhoto ? <img src={sarpanchPhoto} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} /> : sarpanchName.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#22c55e", marginBottom: 3 }}>{sarpanchName} · Sarpanch</div>
                <div style={{ fontSize: 13.5, color: "var(--ct65)", lineHeight: 1.5 }}>धन्यवाद! आपकी समस्या जल्द ही हल की जाएगी। हम हर शिकायत को गंभीरता से लेते हैं — आपका सहयोग गाँव को बेहतर बनाता है। 🙏</div>
              </div>
            </div>
            <button onClick={() => {
              setSubmitSuccess(false);
              if (showSubmitFAB) setShowSubmitFAB(false);
              if (page === "submit") setPage("board");
            }} style={{ width: "100%", padding: "13px 0", borderRadius: 12, background: "var(--cbg8)", border: "1px solid var(--cbg12)", color: "var(--text-main)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Theek Hai</button>
          </div>
        </div>
      )}

      {/* Enhanced FAB with Voice & Photo */}
      <EnhancedFAB
        onOpenSubmit={(transcript) => { if (transcript) setVoiceDraft(transcript); if (!currentUser) setPage("login"); else setShowSubmitFAB(true); }}
        isOpen={showSubmitFAB}
        onOpenBoard={() => setPage("board")}
        onOpenNotices={() => setPage("notices")}
      />

      {/* Submit Form Modal */}
      {showSubmitFAB && currentUser && (
        <div
          onClick={() => setShowSubmitFAB(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100000,
            background: "rgba(10, 8, 20, 0.78)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflowY: "auto",
            padding: "max(20px, env(safe-area-inset-top)) 14px max(90px, env(safe-area-inset-bottom))",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 600, maxHeight: "none", margin: "auto 0" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
              <button
                type="button"
                aria-label="Close report form"
                onClick={() => setShowSubmitFAB(false)}
                style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: "8px 14px", background: "rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer", fontSize: 14 }}
              >
                ✕ Close
              </button>
            </div>
            <SubmitForm currentUser={currentUser} onSubmit={addProblem} onSubmitted={() => setShowSubmitFAB(false)} sarpanchName={sarpanchName} sarpanchPhoto={sarpanchPhoto} voiceDraft={voiceDraft} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}
