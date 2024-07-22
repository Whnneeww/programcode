class saa {
    getInfo() {
        return {
            id: 'saa',
            name: 'スクラッチ認証',
            blocks: [
                { opcode: 'tokengeneration', blockType: Scratch.BlockType.COMMAND, text: 'トークン生成' },
                { opcode: 'token', blockType: Scratch.BlockType.REPORTER, text: 'トークン' },
                { opcode: 'saaset', blockType: Scratch.BlockType.COMMAND, text: '認証する' },
                { opcode: 'username', blockType: Scratch.BlockType.REPORTER, text: 'サインインしているユーザー名' },
                { opcode: 'userid', blockType: Scratch.BlockType.REPORTER, text: 'サインインしているユーザーのID' },
                { opcode: 'iconURL', blockType: Scratch.BlockType.REPORTER, text: 'サインインしているユーザーのアイコン' }
            ]
        };
    }

    tokengeneration() {
        this.myaid = crypto.randomUUID();
    }

    token() {
        return this.myaid;
    }

    saaset() {
        async function fetchScratchComments(projectId) {
            try {
                const response = await fetch(`https://api.scratch.mit.edu/projects/${projectId}/comments`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                return data.comments;
            } catch (error) {
                console.error("Error fetching comments:", error);
                return null;
            }
        }
        const projectId = 35458348;
        fetchScratchComments(projectId)
            .then(comments => {
                if (comments) {
                    const latestComment = comments[0];
                    this.uzr = latestComment.author.username;
                    this.id = latestComment.author.id;
                    this.iconURL = latestComment.author.profile_image_url;
                    this.sid = latestComment.content;
                } else {
                    alert('不明なエラー');
                }
            });
    }

    username() {
        return (this.sid === this.myaid) ? this.uzr : null;
    }

    userid() {
        return (this.sid === this.myaid) ? this.id : null;
    }

    iconURL() {
        return (this.sid === this.myaid) ? this.iconURL : null;
    }
}

Scratch.extensions.register(new saa());
