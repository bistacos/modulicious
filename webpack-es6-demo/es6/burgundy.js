export function burg () {
	return 'Pinot Noir, France';
}

// (not exported)
function dummyFunc () {
	// The Answer to the Ultimate Question of Life, 
	// the Universe, and Everything"
	return 42;
}

// the 'default' statement ensures that there is a default value
// for a case where the import statement imports a non-existent function
// or doesn't specify what it's importing: for example, "import burg"

export default burg;