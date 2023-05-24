import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CONVITELOC.module.css";
const CONVITELOC = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/convite-info");
  }, [navigate]);

  const onLabelText1Click = useCallback(() => {
    // Please sync "COLAB" to the project
  }, []);

  const onButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/convite-off");
  }, [navigate]);

  const onDropIconClick = useCallback(() => {
    // Please sync "Launch Screen 7" to the project
  }, []);

  return (
    <div className={styles.conviteLoc}>
      <div className={styles.miniSocial}>Mini Social</div>
      <img
        className={styles.conviteLocChild}
        alt=""
        src="/rectangle-4701@2x.png"
      />
      <div className={styles.aFestaAcontecer}>
        A festa acontecerá no recanto Trivê, que conta com piscina, sauna,
        churrasqueira e um belo lago, Localizado a 45 min de SP, na saída do km
        44 da Castelo Brranco
      </div>
      <div className={styles.jul01}>Jul 01 - 2:00PM</div>
      <img
        className={styles.conviteLocItem}
        alt=""
        src="/rectangle-469@2x.png"
      />
      <Button
        className={styles.button}
        variant="outlined"
        color="primary"
        size="small"
        href="https://goo.gl/maps/ERhBynKWmttGhBuz8"
      >
        Ver localização
      </Button>
      <div className={styles.location}>
        <img className={styles.gpsIcon} alt="" src="/gps.svg" />
      </div>
      <div className={styles.component7}>
        <div className={styles.buttonParent}>
          <Button
            className={styles.button1}
            variant="outlined"
            color="primary"
            onClick={onButton1Click}
          >
            Descrição
          </Button>
          <div className={styles.button2}>
            <div className={styles.label}>Localização</div>
          </div>
          <div className={styles.button3}>
            <div className={styles.label1} onClick={onLabelText1Click}>
              Colaboração
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ruaHormidasDa}>
        Rua Hormidas da Silva, n° 9 , Araçariguama
      </div>
      <Button
        className={styles.button4}
        sx={{ width: 175 }}
        variant="outlined"
        color="primary"
        size="large"
        onClick={onButton2Click}
      >
        ON
      </Button>
      <Button
        className={styles.button5}
        sx={{ width: 189 }}
        variant="outlined"
        color="error"
        size="large"
        href="/convite-off"
        onClick={onButton3Click}
      >
        OFF
      </Button>
      <div className={styles.social}>Social</div>
      <img
        className={styles.dropIcon}
        alt=""
        src="/drop1.svg"
        onClick={onDropIconClick}
      />
    </div>
  );
};

export default CONVITELOC;
