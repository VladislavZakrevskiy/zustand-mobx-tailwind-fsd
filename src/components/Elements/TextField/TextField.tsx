import { FC, InputHTMLAttributes } from "react";
// import cn from "classnames";
import "./TextField.css";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	// value: string;
	// onChangeValue: (e: string) => void;
	// variant: "filled" | "standart";
}

export const TextField: FC<TextFieldProps> = () =>
	// {
	// onChangeValue, value, className, ...inputProps
	// },
	{
		// const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value);

		return (
			<div className="container">
				<div>
					<h4 className="title">Underlined Inputs</h4>
					<form>
						<div className="omrs-input-group">
							<label className="omrs-input-underlined">
								<input required />
								<span className="omrs-input-label">Normal</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
						<div className="omrs-input-group">
							<label className="omrs-input-underlined omrs-input-danger">
								<input required />
								<span className="omrs-input-label">Danger</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
						<div className="omrs-input-group">
							<label className="omrs-input-underlined">
								<input required disabled />
								<span className="omrs-input-label">Danger</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
					</form>
				</div>
				<div>
					<h4 className="title">Filled Inputs</h4>
					<form>
						<div className="omrs-input-group">
							<label className="omrs-input-filled">
								<input required />
								<span className="omrs-input-label">Normal</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
						<div className="omrs-input-group">
							<label className="omrs-input-filled omrs-input-danger">
								<input required />
								<span className="omrs-input-label">Danger</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
						<div className="omrs-input-group">
							<label className="omrs-input-underlined">
								<input required disabled />
								<span className="omrs-input-label">Danger</span>
								<span className="omrs-input-helper">Helper Text</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0V0z" />
									<circle cx="15.5" cy="9.5" r="1.5" />
									<circle cx="8.5" cy="9.5" r="1.5" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" />
								</svg>
							</label>
						</div>
					</form>
				</div>
			</div>
		);
	};
