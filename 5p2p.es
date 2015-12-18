#!/usr/bin/env ruby

# require 'the_jekyll_editor'
require '/Users/ruvido/Dropbox/development/the_jekyll_editor/lib/the_jekyll_editor'

# ===================
# CONFIGURATION
# ===================

iblog="/Users/ruvido/Dropbox/web/5p2p.es"
idump="#{iblog}/__writing"

myblog=Blogdata.new( idump, iblog )

[ myblog.dump_previews, myblog.dump_drafts ].each do |cdir|

  Dir["#{cdir}/{[!_]**/*,*}.md"].each do |ii|

    puts '--------------------------------'


    draft=Draft.new(ii,myblog)
    status = draft.status
    puts draft.basename, draft.filename, draft.image, status

    case status
    when "publish"
      draft.to_posts
      puts "file published!"
    when "preview"
      draft.missing
      draft.to_previews
      # puts "file sent to previews, want the address?"
    when "draft"
      puts "keep working on that!"
    end    

  end
  puts '--------------------------------'
end

if 1

  # date = DateTime.now
  date = Time.now
  today=date.strftime("%d-%m-%Y")
  # Dir.chdir iblog
  f = File.open("#{iblog}/today", "w+")
  f.puts today
  f.close

end

# sleep 1
# myblog.push

Dir.chdir iblog
`git add --all .`
`git commit -a -m 'commit'`
`git push`
