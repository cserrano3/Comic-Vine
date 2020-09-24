import { format } from 'date-fns';

export const formatDate = (stringLiteral: string): string => format(new Date(stringLiteral), 'dd/MM/yyyy');
