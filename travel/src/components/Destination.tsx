import React from 'react';
import styles from './Destination.module.scss';

const Destination: React.FC<{destination: string}> = props => {
    return (
        <div>
			<div className="container">
				<div className="row">
				{'maldives'.includes(props.destination) &&<div className ="col col-50">
				 <div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-1.webp 1x, /images/destination-1.webp 2x" type="image/webp" />
							<img src="/images/destination-1.png" srcSet="/images/destination-1.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
				{'carribean'.includes(props.destination) &&<div className="col col-50">
				 <div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-2.webp 1x, /images/destination-2.webp 2x" type="image/webp" />
							<img src="/images/destination-2.png" srcSet="/images/destination-2.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
			</div>

			<div className="row">
			{'canary islands'.includes(props.destination) &&<div className ="col col-50">
				 <div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-3.webp 1x, /images/destination-3.webp 2x" type="image/webp" />
							<img src="/images/destination-3.png" srcSet="/images/destination-3.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
				{'maldives'.includes(props.destination) &&<div className="col col-50">
				 <div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-4.webp 1x, /images/destination-4.webp 2x" type="image/webp" />
							<img src="/images/destination-4.png" srcSet="/images/destination-4.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
			</div>

			<div className="row">
			{'maldives'.includes(props.destination) && <div className ="col col-50">
				<div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-5.webp 1x, /images/destination-5.webp 2x" type="image/webp" />
							<img src="/images/destination-5.png" srcSet="/images/destination-5.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
				{'maldives'.includes(props.destination) &&<div className="col col-50">
				 <div className = {styles['card__image']}>
						<picture>
							<source srcSet="/images/destination-6.webp 1x, /images/destination-6.webp 2x" type="image/webp" />
							<img src="/images/destination-6.png" srcSet="/images/destination-6.png 2x" alt="destination" />
						</picture>
					</div>
				</div>}
			</div>
			</div>
		</div>
    );
};

export default Destination;