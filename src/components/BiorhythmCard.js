import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import dayjs from "dayjs";
import React from "react";
import { calculateBiorhythms } from "../lib/biorhythm";

function BiorythmCard({ targetDate, birthDate }) {
  const formatDate = (isoString) => {
    const day = dayjs(isoString);
    return day.format("D MMMM YYYY");
  };
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: {physical}</p>
        <p>Emotional:{emotional}</p>
        <p>Intelectual:{intellectual}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorythmCard;
