import uuidv1 from 'uuid'

export function getUniqueId() {
    return uuidv1().toString();
}
