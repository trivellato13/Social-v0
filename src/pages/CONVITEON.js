import { useCallback } from "react";
import styles from "./CONVITEON.module.css";
const CONVITEON = () => {
  const onLabelText2Click = useCallback(() => {
    // Please sync "COLAB" to the project
  }, []);

  const onVocSerDirecionadoClick = useCallback(() => {
    // Please sync "Launch Screen" to the project
  }, []);

  return (
    <div className={styles.conviteOn}>
      <div className={styles.social}>Social</div>
      <div className={styles.festaDaSocialContainer}>
        <p className={styles.festaDaSocial}>Festa da Social galera!</p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          Levem roupas para piscina, e lembrem que faz frio de noite
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          Pedimos por gentileza que respeitem o espaço e joguem o lixo no lixo
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>
          A social vai contar com churras, agua e refrigerante na faixa
        </p>
        <p className={styles.festaDaSocial}>&nbsp;</p>
        <p className={styles.festaDaSocial}>O evento já começou lá no feed!</p>
      </div>
      <img
        className={styles.conviteOnChild}
        alt=""
        src="/rectangle-470@2x.png"
      />
      <div className={styles.jul01}>Jul 01 - 2:00PM</div>
      <div className={styles.social1}>Social</div>
      <img className={styles.conviteOnItem} alt="" src="/ellipse-68@2x.png" />
      <div className={styles.component8}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.label}>Descrição</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.label}>Localização</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.label2} onClick={onLabelText2Click}>
              Colaboração
            </div>
          </div>
        </div>
      </div>
      <div className={styles.conviteOnInner} />
      <div className={styles.estamosMuitoFelizes}>
        Estamos muito felizes com a sua presença!
      </div>
      <div
        className={styles.vocSerDirecionadoContainer}
        onClick={onVocSerDirecionadoClick}
      >
        <p className={styles.festaDaSocial}>
          Você será direcionado para realizar o download do aplicativo da Mini
          Social.
        </p>
        <p className={styles.festaDaSocial}>A festa já começou lá!</p>
      </div>
      <img className={styles.dropIcon} alt="" src="/drop.svg" />
    </div>
  );
};

export default CONVITEON;
