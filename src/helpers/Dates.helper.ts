export abstract class DateHelper {
  public static monthsBetween(start: Date, end: Date): number {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();

    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    let months = (endYear - startYear) * 12 + (endMonth - startMonth);

    if (end.getDate() < start.getDate()) {
      months--;
    }

    return months;
  }
}
