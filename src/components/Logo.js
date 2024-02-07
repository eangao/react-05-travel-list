// And remember that in JavaScript,
// we can export in two ways.
// So we can have named exports,
// which would simply be this.
// So with this, we would create an export called logo
// which we would then have to import
// with exactly that name
// into the other file,
// so into the file where we need it.

// But usually, in React apps,
// what we do is to use a default export.

export default function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
