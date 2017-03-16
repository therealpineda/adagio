albums = []
@results.each do |result|
  if result.searchable_type == 'Album'
    albums.push(result)
  end
end

json.albums albums
