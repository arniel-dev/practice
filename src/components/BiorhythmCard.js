import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import dayjs from "dayjs";
import React from "react";
import { calculateBiorhythms } from "../lib/biorhythm";
import BiorhythmChart from "./BiorhythmChart";

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
        <BiorhythmChart targetDate={targetDate} birthDate={birthDate} />
        <p>Physical: {physical}</p>
        <p>Emotional:{emotional}</p>
        <p>Intelectual:{intellectual}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorythmCard;
