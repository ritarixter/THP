import { useTranslation } from "react-i18next";
import styles from "./TeamCards.module.scss";

import ninaPhoto from "../../../images/Nina_Thurn.svg";
import rizaPhoto from "../../../images/Riza_Demirel.svg";
import susannePhoto from "../../../images/Susanne_Hoth.svg";

interface teamMember {
  id: number;
  name: string;
  position: string;
  subtitle?: string;
  description?: string;
  photoUrl: string;
}

const TeamCards = () => {
  const { t } = useTranslation();

  const teamMembers: teamMember[] = [
    {
      id: 1,
      name: "Nina Thurn",
      position: t("team.members.nina.position"),
      photoUrl: ninaPhoto,
    },
    {
      id: 2,
      name: "Riza Demirel",
      position: t("team.members.riza.position"),
      photoUrl: rizaPhoto,
    },
    {
      id: 3,
      name: "Susanne Hoth",
      position: t("team.members.susanne.position"),
      photoUrl: susannePhoto,
    },
  ];

  return (
    <section className={styles.TeamCards}>
      <h2 className={styles.title}>{t("team.title")}</h2>

      <div className={styles.cardsContainer}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
            </div>

            <div className={styles.photoContainer}>
              <img
                src={member.photoUrl}
                alt={`${member.name} - ${member.position}`}
                className={styles.photo}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
