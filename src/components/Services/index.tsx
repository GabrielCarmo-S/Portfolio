import styles from './styles.module.scss';
import Image from 'next/image'

export function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>Serviços</p>

        <div>
          <div>
            <Image src="/code.svg" width={56} height={56} alt="Icon code" />
            <p>Criação <br />
              de sites
            </p>
          </div>
          <div>
            <Image src="/figma.svg" width={56} height={56} alt="Icon figma" />
            <p>Criação <br />
              de sistemas
            </p>
          </div>
          <div>
            <Image src="/smartphone.svg" width={56} height={56} alt="Icon Smartphone" />
            <p>Sites <br />
              responsivos
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}