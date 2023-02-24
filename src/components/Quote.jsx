import { useSelector } from 'react-redux'
import {
    loadingSelector,
    errorSelector,
    quoteSelector
} from '../redux/quotesSlice'

export const Quote = () => {
    const quote = useSelector(quoteSelector);
    const isLoading = useSelector(loadingSelector);
    const isError = useSelector(errorSelector);

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p style={{ color: 'red' }}>Something went wrong, try refreshing the page.</p>

    return <p>{quote}</p>
}