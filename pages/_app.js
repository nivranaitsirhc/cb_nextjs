import '../styles/globals.css'

function App({ Component, pageProps }) {
	return (
		<div>
			{
				// Prevent Server from rendering React Router
				typeof window === 'undefined' ? null : <Component {...pageProps} />
			}
		</div>
	);
}

export default App;