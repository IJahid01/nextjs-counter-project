"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { useState } from "react";

const BasicCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 1
				</Button>

				<Button
					onClick={plus}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
