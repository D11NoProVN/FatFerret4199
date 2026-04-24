function itemText(item) {
  return [
    item?.custom_name_clean || '',
    ...(item?.lore_clean || [])
  ].join(' ').toLowerCase()
}

function isSkeletonSpawnerSummary(item) {
  if (!item || item.empty) return false
  const text = itemText(item)
  return text.includes('skeleton') && text.includes('spawner')
}

function findSkeletonSpawner(items = []) {
  return items.find(isSkeletonSpawnerSummary) || null
}

function shouldStartSpawnerHandoff({ enabled, afkSuccess, shardValue, hasPendingSpawner, threshold = 1500 }) {
  return Boolean(enabled && afkSuccess && !hasPendingSpawner && Number(shardValue) >= Number(threshold))
}

module.exports = {
  isSkeletonSpawnerSummary,
  findSkeletonSpawner,
  shouldStartSpawnerHandoff
}
