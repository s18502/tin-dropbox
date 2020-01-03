export function findByPath(path, tree) {
  if(!tree) return tree;

  let pathQ = JSON.parse(JSON.stringify(path))
  pathQ.shift();

  while(pathQ.length > 0) {
    let current = pathQ.shift();

    tree = tree.children.filter(x=>x.name === current)[0];
  }

  return tree.children;
}