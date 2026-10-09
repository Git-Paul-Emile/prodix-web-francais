import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/image-1-1.asset.json';
import oct from '@/assets/image-6-1.asset.json';
import agl from '@/assets/image-6-2.asset.json';
import asecna from '@/assets/image-6-3.asset.json';
import brochure from '@/assets/brochure.asset.json';

export function Brand() { return <span className="brand"><img src={logo.url} width={1665} height={427} alt="PRODIX" /><span>GROUP</span></span>; }

export function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="topline"><div className="site-width"><span>Un groupe, toutes vos ambitions.</span><span>Libreville, Gabon <span className="topline-separator">|</span> <a href="tel:+24177055848">077.05.58.48</a></span></div></div><header className="site-header"><div className="site-width header-inner"><Link to="/" aria-label="PRODIX Group, accueil"><Brand /></Link><nav aria-label="Navigation principale" className={open ? 'main-nav is-open' : 'main-nav'}><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'active' }} onClick={() => setOpen(false)}>Accueil</Link><Link to="/le-groupe" activeProps={{ className: 'active' }} onClick={() => setOpen(false)}>Le groupe</Link><Link to="/nos-services" activeProps={{ className: 'active' }} onClick={() => setOpen(false)}>Nos services</Link><Link to="/contact" activeProps={{ className: 'active' }} onClick={() => setOpen(false)}>Contact</Link></nav><Button asChild className="header-cta"><Link to="/contact">Parlons de votre projet</Link></Button><Button variant="outline" className="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}</Button></div></header></>;
}

export function Partners() { return <section className="partners site-width" aria-label="Nos références"><p>ILS NOUS FONT<br /><strong>CONFIANCE</strong></p><div className="partner-logo oct"><img src={oct.url} alt="Owendo Container Terminal Gabon" width={327} height={38} loading="lazy" /></div><div className="partner-logo agl"><img src={agl.url} alt="AGL, Africa Global Logistics" width={596} height={335} loading="lazy" /></div><div className="partner-logo asecna"><img src={asecna.url} alt="ASECNA" width={406} height={430} loading="lazy" /></div></section>; }

export function ContactBand() { return <section className="contact-band"><div className="site-width"><div><span className="eyebrow">CONSTRUISONS LA SUITE, ENSEMBLE</span><h2>Votre projet commence<br />par une conversation.</h2><p>Un premier échange sans engagement, une équipe à votre écoute.</p></div><Button asChild className="orange-button"><Link to="/contact">Parlons de votre projet</Link></Button></div></section>; }

export function Footer() { return <footer className="site-footer"><div className="site-width footer-main"><div><Link to="/" aria-label="Accueil PRODIX Group"><Brand /></Link><p>De l’idée à l’entreprise.<br />Ancrés au Gabon. Tournés vers l’avenir.</p></div><div><h3>Le groupe</h3><Link to="/le-groupe">Notre vision</Link><Link to="/nos-services">Nos services</Link><a href={brochure.url} target="_blank" rel="noreferrer">Notre plaquette PDF</a></div><div><h3>Restons en contact</h3><a href="mailto:infos@prodixgroup.com">infos@prodixgroup.com</a><a href="tel:+24177055848">077.05.58.48</a><span>Libreville, Gabon</span></div></div><div className="site-width footer-bottom"><span>© {new Date().getFullYear()} PRODIX Group</span><span>Formaliser. Équiper. Connecter.</span></div></footer>; }