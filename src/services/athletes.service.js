import api from "@/services/api.service"
import APIS from '@/models/api.model';
import { stringifyUrl } from 'query-string';
import * as _ from 'lodash';

// ****************************** Atheles Servie **********************************

// Get athletes by trainer id
export const getAthletesByTrainerId = async (trainerId) => {
    if (!trainerId) return { success: false, message: 'Trainer id not provided' };
    const uri = stringifyUrl({url: APIS.ATHLETES_BY_TRAINER_ID, query: {userId: trainerId }})
    return await api.get(uri);
};

// Get athletes detail by athlete id
export const getAthletesDetailById = async (athleteId) => {
    if (!athleteId) return { success: false, message: 'Athlete id not provided' };
    const uri = _.replace(APIS.ATHLES_DETAIL_BY_ID, ':id', athleteId)
    return await api.get(uri);
};