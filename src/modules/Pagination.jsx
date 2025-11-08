import styles from './Pagination.module.css'

function Pagination({ page, setPage }) {

      const previousHandler = () => {
            if (page <= 1) return; 
             setPage((page) => page - 1)
      }
      
      const nextHandler = () => {
            if (page >= 8) return;
            setPage((page) => page + 1)
      }

  return (
      <div className={styles.pagination}>
            <button onClick={previousHandler} className={page === 1 ? styles.disabled : null}>previous</button>
                  <p className={page === 1 ? styles.selected : null}>1</p>
                  <p className={page === 2 ? styles.selected : null}>2</p>
                  <p>...</p>
                  {page > 2 && page < 7 && (
                        <>
                              <p className={styles.selected}>{page}</p>
                              <p>...</p>
                        </>
                  )}
                  <p className={page === 7 ? styles.selected : null}>7</p>
                  <p className={page === 8 ? styles.selected : null}>8</p>
            <button onClick={nextHandler} className={page === 8 ? styles.disabled : null}>next</button>
      </div>
)
}

export default Pagination