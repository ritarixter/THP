import styles from "./ServiceItem.module.scss";

export interface IServiceItemProps {
  label: string;
  title: string;
  content: string[][];
}
export default function ServiceItem({
  label,
  title,
  content,
}: IServiceItemProps) {
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.content__title}>{title}</h2>

        <div className={styles.content__wrapper}>
          <div className={styles.content__center}>
            <div className={styles.content__icon}>{label}</div>

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
                  width="533"
                  height="62"
                  viewBox="0 0 533 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0.5H256L527.5 57.5" stroke="#4878FE" />
                  <circle
                    cx="529"
                    cy="58"
                    r="3.5"
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
      </div>

      <div className={styles.content__mobile}>
        <div className={styles.content__icon}>{label}</div>

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
      </div>
    </>
  );
}
