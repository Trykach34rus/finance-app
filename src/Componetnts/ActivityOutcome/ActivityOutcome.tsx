import Eat from '../../ProgectFoto/Eat.svg'
import fast_food from '../../ProgectFoto/fast_food.svg'
import health from '../../ProgectFoto/health.svg'
import hobby from '../../ProgectFoto/hobby.svg'
import house from '../../ProgectFoto/house.svg'
import other from '../../ProgectFoto/other.svg'
import { CategorAmountActivityProps } from '../../types'
import st from './Activity.module.scss'

export default function ActivityOutcome({
	amounts,
}: CategorAmountActivityProps) {
	return (
		<div className={st.root}>
			<p className={st.title}>Outcome</p>
			<div className={st.activitysContainer}>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={house} />
					</div>
					<p className={st.activityTitle}>
						Rental housing: ${amounts.rentalHousing}
					</p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={health} />
					</div>
					<p className={st.activityTitle}>Health: ${amounts.health} </p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={Eat} />
					</div>
					<p className={st.activityTitle}>Eat: ${amounts.eat} </p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={fast_food} />
					</div>
					<p className={st.activityTitle}>Fast food: ${amounts.fastFood}</p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={hobby} />
					</div>
					<p className={st.activityTitle}>Hobby: ${amounts.hobby} </p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={other} />
					</div>
					<p className={st.activityTitle}>Other: ${amounts.other} </p>
				</div>
			</div>
		</div>
	)
}
