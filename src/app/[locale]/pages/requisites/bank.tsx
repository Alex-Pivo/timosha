"use client";
import { useState } from "react";
import styles from "./styles/bank.module.scss";
import { useTranslations } from "next-intl";

export default function Bank() {
  let [active, setActive] = useState(false);
  let [activeTwo, setActiveTwo] = useState(false);
  let [activeThree, setActiveThree] = useState(false);
  let [activeFour, setActiveFour] = useState(false);
  const t = useTranslations('Donate');

  let [activeBtn, setActiveBtn] = useState(true);
  let [activeBtn2, setActiveBtn2] = useState(false);
  let [activeBtn3, setActiveBtn3] = useState(false);
  let [activeBtn4, setActiveBtn4] = useState(false);
  let [activeBtn5, setActiveBtn5] = useState(false);

  return (
    <>
      <div id="bank" className={styles.bank}>
        <div className={styles.container}>
          <p className={styles.title}>{t("title2")}</p>
          <div className={styles.btn__container}>
            <button
              className={activeBtn ? styles.btnCash__active : styles.btnCash}
              onClick={() => {
                setActiveBtn((activeBtn = true));
                setActiveBtn2((activeBtn2 = false));
                setActiveBtn3((activeBtn3 = false));
                setActiveBtn4((activeBtn4 = false));
                setActiveBtn5((activeBtn5 = false));
              }}
            >
              UAH
            </button>
            <button
              className={activeBtn2 ? styles.btnCash__active : styles.btnCash}
              onClick={() => {
                setActiveBtn((activeBtn = false));
                setActiveBtn2((activeBtn2 = true));
                setActiveBtn3((activeBtn3 = false));
                setActiveBtn4((activeBtn4 = false));
                setActiveBtn5((activeBtn5 = false));
              }}
            >
              USD
            </button>
            <button
              className={activeBtn3 ? styles.btnCash__active : styles.btnCash}
              onClick={() => {
                setActiveBtn((activeBtn = false));
                setActiveBtn2((activeBtn2 = false));
                setActiveBtn3((activeBtn3 = true));
                setActiveBtn4((activeBtn4 = false));
                setActiveBtn5((activeBtn5 = false));
              }}
            >
              EUR
            </button>
            <button
              className={activeBtn4 ? styles.btnCash__active : styles.btnCash}
              onClick={() => {
                setActiveBtn((activeBtn = false));
                setActiveBtn2((activeBtn2 = false));
                setActiveBtn3((activeBtn3 = false));
                setActiveBtn4((activeBtn4 = true));
                setActiveBtn5((activeBtn5 = false));
              }}
            >
              RYB
            </button>
            <button
              className={activeBtn5 ? styles.btnCash__active : styles.btnCash}
              onClick={() => {
                setActiveBtn((activeBtn = false));
                setActiveBtn2((activeBtn2 = false));
                setActiveBtn3((activeBtn3 = false));
                setActiveBtn4((activeBtn4 = false));
                setActiveBtn5((activeBtn5 = true));
              }}
            >
              BYN
            </button>
          </div>

          <div className={styles.cash}>
            <div className={styles.line}>
              <p className={styles.left}>{t("recName")}</p>
              <p className={styles.center}>{t("recName1")}</p>
              <div
                className={activeTwo ? styles.massage__active : styles.massage}
              >
                Copy to clipboard
              </div>
              <svg
                onMouseOver={() => {
                  setActiveTwo((activeTwo = true));
                }}
                onMouseOut={() => {
                  setActiveTwo((activeTwo = false));
                }}
                onClick={() => {
                  navigator.clipboard.writeText(t("recName1"));
                }}
                style={{
                  cursor: "pointer",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div className={styles.line}>
              <p className={styles.left}>{t("iban")}</p>
              <p className={styles.center}>{t("iban1")}</p>
              <div className={active ? styles.massage__active : styles.massage}>
                Copy to clipboard
              </div>
              <svg
                onMouseOver={() => {
                  setActive((active = true));
                }}
                onMouseOut={() => {
                  setActive((active = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    t("iban1")
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div className={styles.line}>
              <p className={styles.left}>{t("reccode")}</p>
              <p className={styles.center}>{t("reccode1")}</p>
              <div
                className={
                  activeThree ? styles.massage__active : styles.massage
                }
              >
                Copy to clipboard
              </div>
              <svg
                onMouseOver={() => {
                  setActiveThree((activeThree = true));
                }}
                onMouseOut={() => {
                  setActiveThree((activeThree = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(t("reccode1"));
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
            <div className={styles.line}>
              <p className={styles.left}>{t("bank")}</p>
              <p className={styles.center}>
              {t("bank1")}
              </p>
              <div
                className={activeFour ? styles.massage__active : styles.massage}
              >
                Copy to clipboard
              </div>
              <svg
                onMouseOver={() => {
                  setActiveFour((activeFour = true));
                }}
                onMouseOut={() => {
                  setActiveFour((activeFour = false));
                }}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    t("bank1")
                  );
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.25H13.056C14.894 1.25 16.35 1.25 17.489 1.403C18.661 1.561 19.61 1.893 20.359 2.641C21.107 3.39 21.439 4.339 21.597 5.511C21.75 6.651 21.75 8.106 21.75 9.944V16C21.75 16.8934 21.4311 17.7575 20.8507 18.4367C20.2703 19.1159 19.4665 19.5657 18.584 19.705C18.447 20.469 18.182 21.121 17.652 21.652C17.05 22.254 16.292 22.512 15.392 22.634C14.525 22.75 13.422 22.75 12.055 22.75H8.945C7.578 22.75 6.475 22.75 5.608 22.634C4.708 22.512 3.95 22.254 3.348 21.652C2.746 21.05 2.488 20.292 2.366 19.392C2.25 18.525 2.25 17.422 2.25 16.055V10.945C2.25 9.578 2.25 8.475 2.366 7.608C2.488 6.708 2.746 5.95 3.348 5.348C3.879 4.818 4.531 4.553 5.295 4.416C5.43434 3.53351 5.88408 2.72974 6.5633 2.14934C7.24251 1.56894 8.10658 1.25002 9 1.25ZM6.87 4.271C7.02206 3.827 7.30915 3.44166 7.69109 3.16893C8.07302 2.89619 8.53068 2.74971 9 2.75H13C14.907 2.75 16.261 2.752 17.29 2.89C18.295 3.025 18.875 3.279 19.298 3.702C19.721 4.125 19.975 4.705 20.11 5.711C20.248 6.739 20.25 8.093 20.25 10V16C20.2503 16.4693 20.1038 16.927 19.8311 17.3089C19.5583 17.6908 19.173 17.9779 18.729 18.13C18.75 17.52 18.75 16.83 18.75 16.055V10.945C18.75 9.578 18.75 8.475 18.633 7.608C18.513 6.708 18.253 5.95 17.652 5.348C17.05 4.746 16.292 4.488 15.392 4.367C14.525 4.25 13.422 4.25 12.055 4.25H8.945C8.17 4.25 7.48 4.25 6.87 4.271ZM16.592 6.41C16.315 6.133 15.927 5.953 15.192 5.854C14.438 5.753 13.436 5.751 12.001 5.751H9.001C7.566 5.751 6.565 5.753 5.809 5.854C5.075 5.953 4.687 6.134 4.41 6.41C4.133 6.687 3.953 7.075 3.854 7.81C3.753 8.564 3.751 9.566 3.751 11.001V16.001C3.751 17.436 3.753 18.437 3.854 19.193C3.953 19.927 4.134 20.315 4.41 20.592C4.687 20.869 5.075 21.049 5.81 21.148C6.565 21.249 7.566 21.251 9.001 21.251H12.001C13.436 21.251 14.438 21.249 15.193 21.148C15.927 21.049 16.315 20.868 16.592 20.592C16.869 20.315 17.049 19.927 17.148 19.192C17.249 18.437 17.251 17.436 17.251 16.001V11.001C17.251 9.566 17.249 8.564 17.148 7.809C17.049 7.075 16.868 6.687 16.592 6.41Z"
                  fill="#5380A1"
                />
              </svg>
            </div>
          </div>
          <button
            style={{
              cursor: "pointer",
            }}
            className={styles.btn}
            onClick={() => {
              navigator.clipboard.writeText(
                `${t("recName1")}, ${t("iban1")}, ${t("reccode1")}, ${t("bank1")}`
              );
            }}
          >
            {t("button2")}
          </button>
        </div>
      </div>
    </>
  );
}
