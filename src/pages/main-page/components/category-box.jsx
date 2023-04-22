import styles from './category-box.module.css'


export default function CategoryBox(props){

    return(
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">{props.category.name}</h4>
            </div>
            <div className="card-body">
              <img src={props.category.image} alt="" 
               className={styles.box_image}
              />
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Contact us
              </button>
            </div>
          </div>
    );
}