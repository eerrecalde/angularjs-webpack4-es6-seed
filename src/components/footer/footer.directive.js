import tpl from './footer.tpl.html';

export default function footer() {
  const ftr = {};

  ftr.restrict = 'E';
  ftr.template = tpl;
  return ftr;
}
