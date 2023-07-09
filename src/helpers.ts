import { DateTime, Zone } from "luxon"

export const formatToLocalTime = (
	seconds: number,
	zone: string | Zone | undefined,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a",
) => {
	if (seconds) {
		return DateTime.fromSeconds(seconds as number)
			.setZone(zone)
			.toFormat(format)
	}
}

export const createIconUrl = (code: string) =>
	`http://openweathermap.org/img/wn/${code}@2x.png`
