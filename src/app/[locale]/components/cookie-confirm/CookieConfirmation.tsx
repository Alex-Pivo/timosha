import React, { useState } from 'react';
import styles from './CookieConfirmation.module.scss'
import { useTranslations } from 'next-intl';
interface CookieConfirmationProps {
    onConfirm: () => void;
}

const CookieConfirmation: React.FC<CookieConfirmationProps> = ({ onConfirm }) => {
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const t = useTranslations('cookie');

    const handleConfirm = () => {
        setConfirmed(true);
        onConfirm(); // вызываем колбэк, который передается извне
        // Записываем подтверждение в куки
        document.cookie = 'cookieConfirmation=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    };

    // Проверяем, было ли подтверждение в куки
    if (confirmed || document.cookie.includes('cookieConfirmation=true')) {
        return null; // Если подтверждение получено, не показываем компонент
    }

    return (
        <div className={styles.cookie}>
            <div className={styles.imageWTxt}>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                    <path
                        d="M14.0625 32.3438C15.6158 32.3438 16.875 31.0846 16.875 29.5312C16.875 27.9779 15.6158 26.7188 14.0625 26.7188C12.5092 26.7188 11.25 27.9779 11.25 29.5312C11.25 31.0846 12.5092 32.3438 14.0625 32.3438Z"
                        fill="#649612"/>
                    <path
                        d="M32.3438 30.9375C33.8971 30.9375 35.1562 29.6783 35.1562 28.125C35.1562 26.5717 33.8971 25.3125 32.3438 25.3125C30.7904 25.3125 29.5312 26.5717 29.5312 28.125C29.5312 29.6783 30.7904 30.9375 32.3438 30.9375Z"
                        fill="#649612"/>
                    <path
                        d="M18.2812 16.875C19.8346 16.875 21.0938 15.6158 21.0938 14.0625C21.0938 12.5092 19.8346 11.25 18.2812 11.25C16.7279 11.25 15.4688 12.5092 15.4688 14.0625C15.4688 15.6158 16.7279 16.875 18.2812 16.875Z"
                        fill="#649612"/>
                    <path
                        d="M19.6875 22.5C20.4642 22.5 21.0938 21.8704 21.0938 21.0938C21.0938 20.3171 20.4642 19.6875 19.6875 19.6875C18.9108 19.6875 18.2812 20.3171 18.2812 21.0938C18.2812 21.8704 18.9108 22.5 19.6875 22.5Z"
                        fill="#649612"/>
                    <path
                        d="M32.3438 9.84375C33.8971 9.84375 35.1562 8.58455 35.1562 7.03125C35.1562 5.47795 33.8971 4.21875 32.3438 4.21875C30.7904 4.21875 29.5312 5.47795 29.5312 7.03125C29.5312 8.58455 30.7904 9.84375 32.3438 9.84375Z"
                        fill="#649612"/>
                    <path
                        d="M40.7812 5.625C41.5579 5.625 42.1875 4.9954 42.1875 4.21875C42.1875 3.4421 41.5579 2.8125 40.7812 2.8125C40.0046 2.8125 39.375 3.4421 39.375 4.21875C39.375 4.9954 40.0046 5.625 40.7812 5.625Z"
                        fill="#649612"/>
                    <path
                        d="M22.5 33.75C23.2767 33.75 23.9062 33.1204 23.9062 32.3438C23.9062 31.5671 23.2767 30.9375 22.5 30.9375C21.7233 30.9375 21.0938 31.5671 21.0938 32.3438C21.0938 33.1204 21.7233 33.75 22.5 33.75Z"
                        fill="#649612"/>
                    <path
                        d="M22.5 42.1875C11.6719 42.1875 2.8125 33.3281 2.8125 22.5C2.8125 11.6719 11.6719 2.8125 22.5 2.8125H22.9219L24.8906 2.95312L24.4688 4.64062C24.3281 5.20312 24.1875 5.90625 24.1875 6.46875C24.1875 10.4062 27.2813 13.5 31.2188 13.5C32.625 13.5 34.0312 13.0781 35.2969 12.2344L37.125 14.3438C36.5625 14.9062 36.2812 15.6094 36.2812 16.3125C36.2812 18.1406 38.1094 19.6875 40.0781 18.9844L41.7656 18.2812L42.0469 20.1094C42.1875 20.9531 42.1875 21.7969 42.1875 22.5C42.1875 33.3281 33.3281 42.1875 22.5 42.1875ZM21.5156 5.625C12.6562 6.1875 5.625 13.5 5.625 22.5C5.625 31.7812 13.2188 39.375 22.5 39.375C31.7812 39.375 39.375 31.7812 39.375 22.5V21.9375C36.1406 22.0781 33.4687 19.5469 33.4687 16.3125V16.0312C32.7656 16.1719 32.0625 16.3125 31.2188 16.3125C25.7344 16.3125 21.375 11.9531 21.375 6.46875C21.375 6.1875 21.375 5.90625 21.5156 5.625Z"
                        fill="#649612"/>
                </svg>
                <span>{t('title')}</span>
            </div>
            <button onClick={handleConfirm}>{t('btn')}</button>
        </div>
    );
};

export default CookieConfirmation;