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
import "./BiorhythmCard.css";

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
    <IonCard className="BiorhythmCard ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart targetDate={targetDate} birthDate={birthDate} />
        <p className="physical">Physical: {physical}</p>
        <p className="emotional">Emotional:{emotional}</p>
        <p className="intellectual">Intelectual:{intellectual}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorythmCard;
