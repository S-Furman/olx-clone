import userIcon from '../../../assets/user.svg';
import heartIcon from '../../../assets/heart.svg'
import messageIcon from '../../../assets/message.svg'
import logo from '../../../assets/logo.png';

import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} className={styles.systemLogo}  alt={'system logo'}/>
                <ul>
                    <li>
                        <img src={messageIcon} className={styles.icon} alt={'message icon'}/>
                        <p>Wiadomości</p>
                    </li>
                    <li><img src={heartIcon} className={styles.icon} alt='heart icon'/></li>
                    <li>
                        <img src={userIcon} className={styles.icon} alt='user icon'/>
                        <p>Mój olx</p>
                    </li>
                    <li><button className={styles.addAdvertBtn}>Dodaj ogłoszenie</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;