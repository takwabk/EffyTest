export interface PersonalInfo {
  civility: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface ProjectInfo {
  isOwner: boolean; // Est-il propriétaire ou locataire
  householdSize: number; // Nombre de personnes dans le foyer
  householdIncome: number; // Revenus du foyer (entre 10k et 100k)
  propertyArea: number; // Surface du bien (m2)
}
