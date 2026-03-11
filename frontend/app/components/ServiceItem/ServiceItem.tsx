import styles from "./ServiceItem.module.scss";

export interface IServiceItemProps {
  label: string;
  title: string;
  content: string[][];
  subtitle?: string;
  texts?: { title: string | null; text: string }[];
}
export default function ServiceItem({
  label,
  title,
  content,
  subtitle,
  texts,
}: IServiceItemProps) {
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.content__title}>{title}</h2>
        {subtitle && <h3 className={styles.content__subtitle}>{subtitle}</h3>}

        <div className={styles.content__wrapper}>
          <div className={styles.content__center}>
            <div className={styles.content__icon}>
              <img
                className={styles.content__icon_image}
                src={label}
                alt={title}
              />
            </div>

            {content[0] && content[0].length > 0 && (
              <div className={`${styles.item} ${styles.item__1}`}>
                <ul className={styles.item__list}>
                  {content[0].map((text, index) => (
                    <li key={index + 100}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="428"
                  height="179"
                  viewBox="0 0 428 179"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M255.571 1.00087H0V0H255.995L339.998 87.1524L424 174.305L423.281 175L339.426 88.0004L255.571 1.00087Z"
                    fill="#4878FE"
                  />
                  <circle cx="424" cy="175" r="4" fill="#4878FE" />
                </svg>
              </div>
            )}

            {content[1] && content[1].length > 0 && (
              <div className={`${styles.item} ${styles.item__2}`}>
                <ul className={styles.item__list}>
                  {content[1].map((text, index) => (
                    <li key={index + 200}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="403"
                  height="71"
                  viewBox="0 0 403 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H256L398.5 67" stroke="#4878FE" />
                  <circle
                    cx="399"
                    cy="67"
                    r="3.5"
                    fill="#4878FE"
                    stroke="#4878FE"
                  />
                </svg>
              </div>
            )}

            {content[2] && content[2].length > 0 && (
              <div className={`${styles.item} ${styles.item__3}`}>
                <ul className={styles.item__list}>
                  {content[2].map((text, index) => (
                    <li key={index + 300}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="534"
                  height="63"
                  viewBox="0 0 534 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 61.5371H256.133L527.775 4.50348"
                    stroke="#4878FE"
                  />
                  <path
                    d="M529.275 7.50488C531.209 7.50488 532.777 5.93708 532.777 4.00293C532.777 2.0686 531.21 0.5 529.275 0.5C527.341 0.50007 525.773 2.06864 525.773 4.00293C525.774 5.93703 527.341 7.50481 529.275 7.50488Z"
                    fill="#4878FE"
                    stroke="#4878FE"
                  />
                </svg>
              </div>
            )}

            {content[3] && content[3].length > 0 && (
              <div className={`${styles.item} ${styles.item__4}`}>
                <ul className={styles.item__list}>
                  {content[3].map((text, index) => (
                    <li key={index + 400}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="502"
                  height="71"
                  viewBox="0 0 502 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502 70H245.5L3.5 4.5" stroke="#4878FE" />
                  <circle
                    cx="4"
                    cy="4"
                    r="3.5"
                    fill="#4878FE"
                    stroke="#4878FE"
                  />
                </svg>
              </div>
            )}

            {content[4] && content[4].length > 0 && (
              <div className={`${styles.item} ${styles.item__5}`}>
                <ul className={styles.item__list}>
                  {content[4].map((text, index) => (
                    <li key={index + 500}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="388"
                  height="43"
                  viewBox="0 0 388 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M388 0.5H131.5L6.5 37.5" stroke="#4878FE" />
                  <circle
                    cx="4"
                    cy="38.5"
                    r="3.5"
                    fill="#4878FE"
                    stroke="#4878FE"
                  />
                </svg>
              </div>
            )}

            {content[5] && content[5].length > 0 && (
              <div className={`${styles.item} ${styles.item__6}`}>
                <ul className={styles.item__list}>
                  {content[5].map((text, index) => (
                    <li key={index + 600}>{text}</li>
                  ))}
                </ul>
                <svg
                  width="483"
                  height="92"
                  viewBox="0 0 483 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#4878FE" />
                  <path d="M483 91.5H227L4 4" stroke="#4878FE" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {texts && texts.length > 0 && (
          <div className={styles.texts}>
            {texts.map((item, index) => (
              <div
                key={index}
                className={`${styles.texts__item} ${item.title ? styles.texts__item_titled : styles.texts__item_indented}`}
              >
                {item.title && (
                  <h4 className={styles.texts__title}>{item.title}</h4>
                )}
                <p className={styles.texts__text}>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content__mobile}>
        <h3 className={styles.content__subtitle}>{subtitle}</h3>

        <div className={styles.content__icon}>
          <img className={styles.content__icon_image} src={label} alt={title} />
        </div>

        <div className={styles.content__mobile_lists}>
          {[...content]
            .sort((a, b) => {
              const lengthA = a.reduce((sum, text) => sum + text.length, 0);
              const lengthB = b.reduce((sum, text) => sum + text.length, 0);
              return lengthB - lengthA;
            })
            .map((block, index) => (
              <ul key={index} className={styles.content__mobile_list}>
                {block.map((text, idx) => (
                  <li key={idx + index * 10}>{text}</li>
                ))}
              </ul>
            ))}
        </div>

        {texts && texts.length > 0 && (
          <div className={styles.texts}>
            {texts.map((item, index) => (
              <div
                key={index}
                className={`${styles.texts__item} ${item.title ? styles.texts__item_titled : styles.texts__item_indented}`}
              >
                {item.title && (
                  <h4 className={styles.texts__title}>{item.title}</h4>
                )}
                <p className={styles.texts__text}>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
