import '../styles/globals.css'

function App({ Component, pageProps }) {
	return (
		<div suppressHydrationWarning>
			{
				// Prevent Server from rendering React Router
				typeof window === 'undefined' ? null : <Component {...pageProps} />
			}
		</div>
	);
}

export default App;