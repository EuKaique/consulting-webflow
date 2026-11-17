export const plans = ['Basic', 'Advanced', 'Pro'] as const;

export function getPlan(value: unknown) {
  return typeof value === 'string' ? plans.find(plan => plan.toLowerCase() === value.toLowerCase()) : undefined;
}
