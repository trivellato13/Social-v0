import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CONVITEOFF.module.css";
const CONVITEOFF = () => {
  const navigate = useNavigate();

  const onLabelText2Click = useCallback(() => {
    // Please sync "COLAB" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/convite-info");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/convite-info");
  }, [navigate]);

  return (
    <div className={styles.conviteOff}>
      <div className={styles.miniSocial}>Mini Social</div>
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
        className={styles.conviteOffChild}
        alt=""
        src="/rectangle-470@2x.png"
      />
      <div className={styles.jul01}>Jul 01 - 2:00PM</div>
      <div className={styles.social}>Social</div>
      <img className={styles.conviteOffItem} alt="" src="/ellipse-68@2x.png" />
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
      <div className={styles.conviteOffInner} onClick={onRectangleClick} />
      <div className={styles.quePenaVocContainer}>
        <p className={styles.festaDaSocial}>Que pena!</p>
        <p className={styles.festaDaSocial}>
          {" "}
          Você poderia nos contar o motivo?
        </p>
      </div>
      <Button
        className={styles.button3}
        sx={{ width: 287 }}
        variant="contained"
        color="primary"
      >
        Enviar
      </Button>
      <TextField
        className={styles.button4}
        sx={{ width: 287 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Mensagem"
        placeholder="Placeholder"
        helperText="Mensagem"
        size="medium"
        margin="none"
      />
      <div className={styles.back} onClick={onBackContainerClick}>
        <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
      </div>
    </div>
  );
};

export default CONVITEOFF;
