import styles from './styles.module.scss';
import Image from 'next/image'

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Sobre mim</h2>
        <p>
          Hi, Gabriel Carmo, enthusiast of the best web & mobile development technologies.
        </p>

        <div className={styles.icons}>
          <div>
            <div>
              <Image src="/smile.svg" width={32} height={32} alt="Imagem de pessoa no celular" />
            </div>
            <p>Meu nome</p>
            <span>Gabriel Carmo</span>
          </div>

          <div>
            <div>
              <Image src="/mail.svg" width={32} height={32} alt="Imagem de pessoa no celular" />
            </div>
            <p>E-mail</p>
            <span>gabrielcarmosilva@outlook.com.br</span>
          </div>

          <div>
            <div>
              <Image src="/Vector.svg" width={32} height={32} alt="Imagem de pessoa no celular" />
            </div>
            <p>Linkedin</p>
            <span>gabrielcarmo-s</span>
          </div>

          <div>
            <div>
              <Image src="/github.svg" width={32} height={32} alt="Imagem de pessoa no celular" />
            </div>
            <p>GitHun</p>
            <span>GabrielCarmo-S</span>
          </div>
        </div>
      </div>
    </div>
  );
}