export default function destructure(obj) {
  const array = [];
  const { special } = obj;

  for (const prop of special) {
    if (!prop.description) {
      prop.description = 'Описание недоступно';
    }

    array.push({
      id: prop.id,
      name: prop.name,
      description: prop.description,
      icon: prop.icon,
    });
  }

  return array;
}
