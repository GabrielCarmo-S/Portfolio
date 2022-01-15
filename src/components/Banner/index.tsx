import styles from './styles.module.scss';
import Image from 'next/image'


export function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <p>Olá, eu sou <br />
            Gabriel Carmo</p>
          <p>Desenvolvedor Front-End & Back-End</p>
          <div>
            <button type="button">Download CV</button>
            <button type="button">Entrar em contato</button>
          </div>
        </div>
        <div>
          <Image src="/banner.svg" width={300} height={254.47} alt="Imagem de pessoa no celular" />
        </div>
      </div>
    </div>
  );
}