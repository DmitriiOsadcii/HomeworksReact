import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { quoteSelect } from "../../features/quote/quote-selectors";
import { fetchQuote } from "../../features/quote/quote-thunks";
import styles from './Quote.module.css'
import { Button, Typography, CircularProgress } from "@mui/material";

const Quote = () => {

    const dispatch = useDispatch();

    const { quote, loading, error, author } = useSelector(quoteSelect)

    useEffect(() => {
        dispatch(fetchQuote())
    }, [dispatch])

    const changeQuote = () => {
        dispatch(fetchQuote())
    }

    return (
        <div className={styles.container}>

            <h1>Random Quote Generator</h1>
            <h6>{quote}</h6>
            <Typography>{author}</Typography>
            {loading && <CircularProgress size={40} />}
            {error && <p>{error}</p>}
            <Button variant="outlined" onClick={() => changeQuote()}>New Quote</Button>
        </div>
    )
}

export default Quote;