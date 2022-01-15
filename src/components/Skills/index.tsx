import styles from './styles.module.scss';
import Image from 'next/image'


export function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>Minhas Skills</p>

        <div>
          <div>
            <Image src="/html.svg" width={80} height={80} alt="Icon HTML" />
          </div>

          <div>
            <Image src="/css.svg" width={80} height={80} alt="Icon CSS" />
          </div>

          <div>
            <Image src="/js.svg" width={80} height={80} alt="Icon JS" />
          </div>

          <div>
            <Image src="/ts.svg" width={80} height={80} alt="Icon Typescript" />
          </div>

          <div>
            <Image src="/react.svg" width={80} height={80} alt="Icon React" />
          </div>

          <div>
            <Image src="/next.svg" width={80} height={80} alt="Icon Next" />
          </div>
        </div>
      </div>
    </div>
  );
}